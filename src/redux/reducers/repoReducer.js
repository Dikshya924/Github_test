import { ActionTypes } from "../constants/action-types";

const initialState = {
  repos: [],
  user: [],
};
export const repoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_REPOS:
      return { ...state, repos: payload };
    default:
      return state;
  }
};
export const selectedReposReducer = (state = "", { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_REPOS:
      return { ...state, payload };
    default:
      return state;
  }
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
