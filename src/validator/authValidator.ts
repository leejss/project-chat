export const validPasswordConfirm = (pwd1: string, pwd2: string) =>
  pwd1 === pwd2;
export const validEmail = (email: string) => {
  return email.trim().includes("@");
};
