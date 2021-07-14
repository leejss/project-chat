import React, { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import DirectPanel from "./DirectPanel";
import { IUser } from "../../../types";
import { usersRef } from "../../../database/users";
import { connectionRef, presenceRef } from "../../../database/presence";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

const DirectPanelContainer: FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [users, setUsers] = useState<IUser[]>([]);
  const presenceList = useRef<string[]>([]);

  useEffect(() => {
    connectionRef.on("value", (snap) => {
      if (currentUser && snap.val()) {
        const ref = presenceRef.child(currentUser.uid);
        ref.set(true);
        ref.onDisconnect().remove((err) => {
          if (err) {
            console.error(err);
          }
        });
      }
    });

    presenceRef.on("child_added", (snap) => {
      if (currentUser && snap.key) {
        if (currentUser.uid !== snap.key) {
          presenceList.current.push(snap.key);
        }
      }
    });
    presenceRef.on("child_removed", (snap) => {
      if (currentUser && snap.key) {
        if (currentUser.uid !== snap.key) {
        }
      }
    });
  }, []);

  useEffect(() => {
    let loaded: any = [];
    usersRef.on("child_added", (snap) => {
      loaded.push(snap.val());
      setUsers([...loaded]);
    });
  }, []);

  return <DirectPanel users={users} />;
};

export default DirectPanelContainer;
