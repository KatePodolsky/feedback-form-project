import axios from "axios";
import feedbackActions from "./feedbackActions";

axios.defaults.baseURL = "http://localhost:4000/api";


const feedback = (credentials) => async (dispatch) => {
  dispatch(feedbackActions.feedbackRequest());

  try {
      const response = await axios.post("/users/feedback", credentials);
      dispatch(feedbackActions.feedbackSuccess(response.data));
   
  } catch (error) {
    dispatch(feedbackActions.feedbackError(error.message));
  }
};

export default feedback;