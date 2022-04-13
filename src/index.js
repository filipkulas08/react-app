import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import menu from './menu.js';
import loginGoogle from './loginGoogle.js';
import login from './login.js';
import modal from './modal.js';
import dateTimePicker from './dateTimePicker.js'
import countdownTimer from './countdownTimer.js';
import slider from './slider.js';
import backToTop from './backToTop.js';
import firebase from 'firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const Custom = () => {
  const $window = $(window);

  const init = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyBwYwks6vhoxddjRhiR5ahYYdr3AuhyFiE",
      authDomain: "book-visit-react.firebaseapp.com",
      projectId: "book-visit-react",
      storageBucket: "book-visit-react.appspot.com",
      messagingSenderId: "508282996268",
      appId: "1:508282996268:web:ac05627eccdd150437b389",
      measurementId: "G-XTXKKCG4VK"
    };
    
    const app = firebase.initializeApp(firebaseConfig);
      const perf = firebase.performance(app);
      const db = firebase.firestore(app);


      menu();
      loginGoogle();
      login(perf);
      modal();
      slider();
      backToTop($window);
      dateTimePicker(db);
      countdownTimer(db);
  }

  init();
};

$(function () {
  Custom();
})
