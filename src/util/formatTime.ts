import moment from "moment";
export const timeFromNow = (timestamp: string) => {
  return moment(timestamp).fromNow();
};
