import * as firebase from 'firebase/app';
import 'firebase/auth/';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBBVIYDv2ulshPtq27OqRhgbr5ITUSQpwI",
    authDomain: "mynetwork-db5e3.firebaseapp.com",
    databaseURL: "https://mynetwork-db5e3.firebaseio.com",
    projectId: "mynetwork-db5e3",
    storageBucket: "mynetwork-db5e3.appspot.com",
    messagingSenderId: "767661110634",
    appId: "1:767661110634:web:48a9ecd18801992f5b6113"
  })

  export default app;