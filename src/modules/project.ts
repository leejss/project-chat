import { IProject } from "../types";

const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT" as const;

export const setCurrentProject = (project: IProject) => ({
  type: SET_CURRENT_PROJECT,
  payload: project,
});

type ProjectAction = ReturnType<typeof setCurrentProject>;
type ProjectState = {
  currentProject: IProject | null;
};

const initialState: ProjectState = {
  currentProject: null,
};

const projectReducer = (
  state: ProjectState = initialState,
  action: ProjectAction
): ProjectState => {
  switch (action.type) {
    case SET_CURRENT_PROJECT:
      return {
        currentProject: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
