import axios from "../apis/question.js";
import { FETCH_QUESTION, NEW_SELECTION, RESET_SELECTION } from "./types.js";

export const getQuestion = () => async dispatch => {
    await axios
        .get("/question")
        .then(res => {
            dispatch({ type: FETCH_QUESTION, payload: res.data });
        })
        .catch(err => console.log(err));
};

export const newSelection = option => {
    return { type: NEW_SELECTION, payload: option };
};

export const resetSelection = () => {
    return { type: RESET_SELECTION };
};
