import { createAction } from "@reduxjs/toolkit";

const feedbackRequest = createAction('feedback/feedbackRequest');
const feedbackSuccess = createAction('feedback/feedbackSuccess');
const feedbackError = createAction('feedback/feedbackError');

export default {
    feedbackRequest,
    feedbackSuccess,
    feedbackError,
};