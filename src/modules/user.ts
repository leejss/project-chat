import { IUser } from "../types";
import firebase from "../firebase";

const SET_CURRENT_USER = "user/SET_CURRENT_USER" as const;

export const setCurrentUser = (user: IUser) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

// action type
type UserAction = ReturnType<typeof setCurrentUser>;
// state type
type UserState = {
  currentUser: IUser | null;
};

const initialState = {
  currentUser: null,
};

const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
