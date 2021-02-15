import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCiRHh7hmFCKanlFR64NNUJYVR26GQS32U',
    authDomain: "parking-sensors-database.firebaseapp.com",
    databaseURL: "https://parking-sensors-database-default-rtdb.firebaseio.com"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();