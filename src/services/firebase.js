import firebase from 'firebase';


const firebaseProjectName = "TestFirebase1";

const config = {
  apiKey: "AIzaSyAyb8LrUGZbzHPGQ1ItQ3sAji7bqwu3Bqg",
  authDomain: "test-5a81d.firebaseapp.com",
  databaseURL: "https://test-5a81d-default-rtdb.firebaseio.com",
  projectId: "test-5a81d"
};
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();