export interface IUser {
  name: string;
  avatar: string;
  uid: string;
}

export interface IDirectUser extends IUser {
  status: string;
}

export interface IUserInput {
  name?: string;
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

export interface IMessage {
  sendBy: IUser;
  content?: string;
  timestamp: string;
  image?: string;
}
