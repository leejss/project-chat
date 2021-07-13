import { combineReducers } from "redux";
import projectReducer from "./project";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
});

// root state type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
