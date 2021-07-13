import React, { ChangeEvent, FormEvent, useState } from "react";
import type { FC } from "react";
import AuthForm from "./AuthForm";
import firebase from "../../firebase";
import { IUserInput } from "../../types";
import { saveUser } from "../../database/users";
import {
  validEmail,
  validPasswordConfirm,
} from "../../validator/authValidator";

const defaultFormInput = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const RegisterContainer: FC = () => {
  const [user, setUser] = useState<IUserInput>(defaultFormInput);
  const [errors, setErrors] = useState<string[] | []>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const validForm = () => {
    if (!validEmail(user.email)) {
      setErrors((prev) => ["Email is not valid", ...prev]);
      return false;
    }
    if (!validPasswordConfirm(user.password, user.passwordConfirm!)) {
      setErrors((prev) => ["Password is not matched", ...prev]);
      return false;
    }
    return true;
  };
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validForm()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((createdUser) => {
          if (createdUser && createdUser.user) {
            createdUser.user
              .updateProfile({
                displayName: user.name,
                photoURL:
                  "https://gravatar.com/avatar/48a810ed9401756f2b0a80d86b5335b2?s=400&d=identicon&r=x",
              })
              .then(() => {
                saveUser(createdUser);
              })
              .catch((err) => {
                console.error("update profile failed", err);
              });
          }
        })
        .catch((err) => {
          console.error("created user failed", err);
          setErrors((prev) => [err.message, ...prev]);
        });
    }
  };
  return (
    <AuthForm
      type="register"
      user={user}
      handleRegister={handleRegister}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default RegisterContainer;
