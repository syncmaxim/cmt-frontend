import { applyMiddleware, compose, createStore } from "redux";
import combinedReducers from "./reducers";
import thunk from "redux-thunk";

const initialState = {};

const store = createStore(combinedReducers, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
