import { IMessage } from "../types";

export const countUsers = (messages: IMessage[]): number => {
  if (messages) {
    const users = messages.reduce((acc: any[], message) => {
      if (!acc.includes(message.sendBy.name)) {
        acc.push(message.sendBy.name);
      }
      return acc;
    }, []);
    return users.length;
  } else {
    return 0;
  }
};

export const displayUsers = (userCtn: number): string => {
  if (userCtn > 1) {
    return `${userCtn} Users`;
  } else {
    return `${userCtn} User`;
  }
};
