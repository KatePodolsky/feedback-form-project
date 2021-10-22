import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import feedbackActions from './feedbackActions';

const user = createReducer([], {
    [feedbackActions.feedbackSuccess]: (_, { payload }) => payload.user,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [feedbackActions.feedbackError]: setError,
});

export default combineReducers({
    user,
    error,
});