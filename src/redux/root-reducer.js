import userEvent from "@testing-library/user-event";
//This is the code that will combibine all our states together.
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
