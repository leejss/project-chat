import React, { ChangeEvent, FormEvent, useState } from "react";
import type { FC } from "react";
import AuthForm from "./AuthForm";
import firebase from "../../firebase";
import { IUserInput } from "../../types";
import { saveUser } from "../../database/users";

const RegisterContainer: FC = () => {
  const [user, setUser] = useState<IUserInput>({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((createdUser) => {
        saveUser(createdUser);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <AuthForm
      type="register"
      user={user}
      handleRegister={handleRegister}
      handleChange={handleChange}
    />
  );
};

export default RegisterContainer;
