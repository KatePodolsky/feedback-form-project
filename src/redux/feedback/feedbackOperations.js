import axios from "axios";
import feedbackActions from "./feedbackActions";
import { pnotifyMessage } from '../../components/Pnotify/Pnotify';

axios.defaults.baseURL = "https://aqueous-refuge-13466.herokuapp.com/api";


const feedback = (credentials) => async (dispatch) => {
  dispatch(feedbackActions.feedbackRequest());

  try {
    const response = await axios.post("/users/feedback", credentials);
    dispatch(feedbackActions.feedbackSuccess(response.data));
     pnotifyMessage('confirmation', 'opts');
   
  } catch (error) {
    dispatch(feedbackActions.feedbackError(error.message));
    pnotifyMessage('sendingError', 'optsError');
  }
};

export default {
  feedback
};
