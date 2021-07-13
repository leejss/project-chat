import React, { ChangeEvent, FormEvent, useState } from "react";
import type { FC } from "react";
import AuthForm from "./AuthForm";
import { IUserInput } from "../../types";
import firebase from "../../firebase";

const defaultLoginInput = {
  email: "",
  password: "",
};

const LoginContainer: FC = () => {
  const [loginInput, setLoginInput] = useState<IUserInput>(defaultLoginInput);
  const [errors, setErrors] = useState<string[] | []>([]);

  const validForm = () => {
    // validation check
    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validForm()) {
      firebase
        .auth()
        .signInWithEmailAndPassword(loginInput.email, loginInput.password)
        .then(() => {
          console.log("Logged in");
        })
        .catch((err) => {
          console.error(err);
          setErrors((prev) => [err.message, ...prev]);
        });
    }
  };

  return (
    <AuthForm
      type="login"
      user={loginInput}
      errors={errors}
      handleChange={handleChange}
      handleLogin={handleLogin}
    />
  );
};

export default LoginContainer;
