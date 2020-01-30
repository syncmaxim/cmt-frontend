import * as TYPE from '../actions/types';

const initialState = [];

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.GET_EVENTS:
      return action.payload;
    case TYPE.GET_EVENT:
      return action.payload;
    case TYPE.CREATE_EVENT:
      return state; // need to return previous state to prevent undefined error
    case TYPE.ATTEND_EVENT:
      return action.payload;
    default:
      return state;
  }
};

export default eventsReducer;
