import * as TYPE from '../actions/types';

const initialState = {
    isLoading: false
};

const preloadReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.SET_LOADING:
            return {...state, isLoading: true};
        case TYPE.SET_UNLOADING:
            return {...state, isLoading: false};
        default:
            return state;
    }
};

export default preloadReducer;
