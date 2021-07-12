export interface IUser {
  name: string;
  avatar: string;
}

export interface IUserInput {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface IProject {
  name: string;
  desc: string;
  createdBy: IUser;
  id: string;
}

export interface IProjectInput {
  name: string;
  desc: string;
}
