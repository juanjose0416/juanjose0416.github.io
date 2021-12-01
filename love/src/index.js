import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import admin from 'firebase-admin'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt9YTqcyTaSC3qBEKPt0GtrriNferXrEI",
  authDomain: "send-email-a2bbf.firebaseapp.com",
  projectId: "send-email-a2bbf",
  storageBucket: "send-email-a2bbf.appspot.com",
  messagingSenderId: "458189918328",
  appId: "1:458189918328:web:d2649c7ed72f10d9ef1d8d",
  measurementId: "G-CJ561Z5V6Z"
};

// Initialize Firebase
initializeApp(firebaseConfig);

admin.initializeApp();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
