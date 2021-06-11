import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyDM7Tl4MhbKdUD9D0jfMPbRVxXnW55XL5I",
  authDomain: "anilist-react.firebaseapp.com",
  projectId: "anilist-react",
  storageBucket: "anilist-react.appspot.com",
  messagingSenderId: "606258110590",
  appId: "1:606258110590:web:abe63383d480bbfbb2782f",
  measurementId: "G-Y3Y6H9V3YE"
})
export default app;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
