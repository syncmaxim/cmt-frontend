import * as TYPE from '../actions/types';

const initialState = {
    id: null,
    email: null
};

const userReducer = (state = initialState, action) => {
    if (action.type === TYPE.GET_USER_INFO) {
        return action.payload;
    } else {
        return state;
    }
};

export default userReducer;
