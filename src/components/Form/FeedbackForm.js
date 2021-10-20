import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { GoogleLogin } from 'react-google-login';
// import GoogleButton from 'react-google-button'
// import { authOperations } from "../../redux/auth";
// import axios from 'axios';
import Button from "../Button";
import styles from "./FeedbackForm.module.scss";
// import authActions from "../../redux/auth/authActions";

const FeedbackForm = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [required, setRequired] = useState(false);

//   const onLogIn = () => dispatch(authOperations.logIn({ email, password }));

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case "email":
//         return setEmail(value);
//       case "password":
//         return setPassword(value);
//       default:
//         return;
//     }
//   };

//   const reset = () => {
//     setEmail("");
//     setPassword("");
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (email === "" || password === "") {
    //   setRequired(true);
    //   return;
    // } else {
    //   setRequired(false);
    // }
    // onLogIn();
    // reset();
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
            // value={name}
            placeholder="Your name*"
            onChange={'handleChange'}
          />
        </label>
        <label className={styles.label}>  
          <input
            className={styles.input}
            type="email"
            name="email"
            // value={email}
            placeholder="Your e-mail*"
            onChange={'handleChange'}
          />
        </label>
      <textarea
        className={styles.textarea}
        rows="5"
        name="message"
        // value={message}
        placeholder="Your message*"
        onChange={'handleChange'}>
        </textarea>
      <div className={styles.button__container}>
          <Button type="submit" buttonText="Send message" />
      </div>
    </form>
  );
};

export default FeedbackForm;