import questionReducer from "./questionReducer";
import { combineReducers } from "redux";

export default combineReducers({
    question: questionReducer
});
