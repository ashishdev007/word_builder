import questionReducer from "./questionReducer";
import selectionReducer from "./selectionReducer";
import { combineReducers } from "redux";

export default combineReducers({
    question: questionReducer,
    selection: selectionReducer
});
