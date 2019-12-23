import { NEW_SELECTION, RESET_SELECTION } from "../actions/types";

const selectionReducer = (state = null, action) => {
    switch (action.type) {
        case NEW_SELECTION:
            return action.payload;
        case RESET_SELECTION:
            return null;
        default:
            return state;
    }
};

export default selectionReducer;
