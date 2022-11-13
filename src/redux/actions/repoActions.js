import { ActionTypes } from "../constants/action-types";
export const setRepo = (repos) => {
  return {
    type: ActionTypes.SET_REPOS,
    payload: repos,
  };
};
export const selectedRepo = (repo) => {
  return {
    type: ActionTypes.SELECTED_REPOS,
    payload: repo,
  };
};
export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};
