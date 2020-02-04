import * as TYPE from '../actions/types';

const initialState = {};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.CHANGE_PASSWORD:
            return action.payload;
        case TYPE.CHANGE_EMAIL:
            return action.payload;
        default:
            return state;
    }
};

export default profileReducer;
