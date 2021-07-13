import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
});

// root state type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
