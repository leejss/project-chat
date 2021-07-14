import { ChangeEvent, FC, useRef } from "react";
import React from "react";
import { Button, Icon, Input, Modal } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { v4 } from "uuid";
import { storageRef } from "../../../storage/storage";
import { saveImgMessage } from "../../../database/messages";

const allowedFileTypes = ["image/jpeg", "image/png"];

type FileModal = {
  open: boolean;
  closeModal: () => void;
};

const FileModal: FC<FileModal> = ({ open, closeModal }) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const currentProject = useSelector(
    (state: RootState) => state.project.currentProject
  );

  const file = useRef<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    file.current = e.target.files![0];
    console.log(file.current);
  };

  const isAllowedFile = (fileType: string) => {
    return allowedFileTypes.includes(fileType);
  };

  const uploadFile = (file: File, metadata: any) => {
    const filePath = `chat/public/${v4()}.${file.type}`;
    const uploadTask = storageRef.child(filePath).put(file, metadata);
    uploadTask.on(
      "state_changed",
      (snap) => {
        let progress =
          Math.round(snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(progress);
        switch (snap.state) {
          case "paused":
            console.error("Upload Paused");
            break;
          case "running":
            console.log("Upload running");
            break;
          default:
            break;
        }
      },
      (err) => {
        console.error("Upload eror", err);
      },
      () => {
        console.log("Upload success");
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            if (currentUser && currentProject) {
              saveImgMessage(url, currentProject.id, currentUser);
            }
          })
          .catch((err) => {
            console.error("Fail to get donwolad url", err);
          });
      }
    );
  };

  const sendFile = () => {
    if (file.current && isAllowedFile(file.current.type)) {
      const metadata = {
        contentType: file.current.type,
      };
      uploadFile(file.current, metadata);
      closeModal();
      file.current = null;
    }
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <Modal.Header>이미지 업로드</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          name="file"
          type="file"
          label="File Types: jpg, png"
          onChange={handleFileChange}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={sendFile}>
          <span>
            <Icon name="checkmark" /> Upload
          </span>
        </Button>
        <Button onClick={closeModal}>
          <span>
            <Icon name="remove" /> Cancel
          </span>
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default FileModal;
