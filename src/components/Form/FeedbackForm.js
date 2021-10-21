import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { feedbackOps } from "../../redux/feedback";
import Button from "../Button";
import styles from "./FeedbackForm.module.scss";

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitFeedback = () => dispatch(feedbackOps.feedback({ name, email, message }));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "message":
        return setMessage(value);
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFeedback();
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
      <h2 className={styles.titleForm}>
        Reach out to us!
      </h2>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            placeholder="Your name*"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>  
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            placeholder="Your e-mail*"
            onChange={handleChange}
          />
        </label>
      <textarea
        className={styles.textarea}
        rows="5"
        name="message"
        value={message}
        placeholder="Your message*"
        onChange={handleChange}>
        </textarea>
      <div className={styles.button__container}>
          <Button type="submit" buttonText="Send message" />
      </div>
    </form>
  );
};

export default FeedbackForm;