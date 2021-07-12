import React, { ChangeEvent, FormEvent } from "react";
import type { FC } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IUserInput } from "../../types";

type AuthForm = {
  type: "login" | "register";
  user: IUserInput;
  handleLogin?: (e: FormEvent<HTMLFormElement>) => void;
  handleRegister?: (e: FormEvent<HTMLFormElement>) => void;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AuthForm: FC<AuthForm> = ({
  type,
  handleLogin,
  handleRegister,
  handleChange,
  user,
}) => {
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="header" textAlign="center">
          <Header.Content as="h1">
            {type === "login" ? "로그인" : "회원가입"}
          </Header.Content>
        </Header>
        <Form
          size="large"
          onSubmit={type === "login" ? handleLogin : handleRegister}
        >
          <Segment>
            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="이메일"
              onChange={handleChange}
              type="email"
              value={user.email}
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="비밀번호"
              onChange={handleChange}
              type="password"
              value={user.password}
            />
            {type === "register" && (
              <Form.Input
                fluid
                name="passwordConfirm"
                icon="lock"
                iconPosition="left"
                placeholder="비밀번호 확인"
                onChange={handleChange}
                type="password"
                value={user.passwordConfirm}
              />
            )}
            <Button fluid size="large" color="orange">
              {type === "login" ? "로그인 하기" : "회원가입 하기"}
            </Button>
          </Segment>
        </Form>
        {/* Error messages */}

        <Message as="section">
          {type === "register" ? (
            <Link to="/login">이미계정을 가지고 계신가요? 로그인 하기</Link>
          ) : (
            <Link to="/register">회원이 아니신가요? 회원가입 하기</Link>
          )}
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default AuthForm;
