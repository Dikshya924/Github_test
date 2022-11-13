import { combineReducers } from "redux";
import { repoReducer, selectedReposReducer, userReducer } from "./repoReducer";

const reducers = combineReducers({
  allRepos: repoReducer,
  repository: selectedReposReducer,
  allUser: userReducer,
});
export default reducers;
