import questionReducer from "./questionReducer";
import selectionReducer from "./selectionReducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    form: formReducer,
    question: questionReducer,
    selection: selectionReducer
});
