import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJumPpgNvxBZMkU-eFTWtkczBqZjSYz5w",
    authDomain: "expense-tracker-project7a.firebaseapp.com",
    databaseURL: "https://expense-tracker-project7a.firebaseio.com",
    projectId: "expense-tracker-project7a",
    storageBucket: "expense-tracker-project7a.appspot.com",
    messagingSenderId: "667239053638",
    appId: "1:667239053638:web:f071b911c734be57ab4d47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;