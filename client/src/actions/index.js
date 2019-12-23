import { FETCH_QUESTION } from "./types.js";

export const getQuestion = dispatch => {
    dispatch({ type: FETCH_QUESTION, payload: null });
};
