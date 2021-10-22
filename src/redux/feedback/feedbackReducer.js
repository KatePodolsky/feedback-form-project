import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import feedbackActions from './feedbackActions';

const user = createReducer([], {
    [feedbackActions.feedbackSuccess]: (state, action) => [action.payload, ...state],
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [feedbackActions.feedbackError]: setError,
});

export default combineReducers({
    user,
    error,
});