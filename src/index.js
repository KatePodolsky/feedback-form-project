import React from 'react';
import ReactDOM from 'react-dom';
import storePersistor from "./redux/store";
import { Provider } from "react-redux";
import App from './App';
import "./index.scss";


ReactDOM.render(
  <React.StrictMode>
     <Provider store={storePersistor.store}>
    <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



