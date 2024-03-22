import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/loginSlice";
import headerReducer from "./slice/headerSlice.ts";
import candidateReducer from "./slice/candidateSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  candidate: candidateReducer,
});

export default rootReducer;
