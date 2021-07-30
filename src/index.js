import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

