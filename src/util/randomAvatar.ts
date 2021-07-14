import md5 from "md5";
const randomAvatar = (email: string) =>
  `https://www.gravatar.com/avatar/${md5(email)}?s=32&d=identicon&r=PG`;

export default randomAvatar;
