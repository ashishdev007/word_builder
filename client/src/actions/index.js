import axios from "../apis/question.js";
import { FETCH_QUESTION } from "./types.js";

export const getQuestion = () => async dispatch => {
    await axios
        .get("/question")
        .then(res => {
            dispatch({ type: FETCH_QUESTION, payload: res.data });
        })
        .catch(err => console.log(err));
};
