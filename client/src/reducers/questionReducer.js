import { FETCH_QUESTION } from "../actions/types";

const questionReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_QUESTION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default questionReducer;
