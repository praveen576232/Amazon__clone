import firebase from 'firebase'


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCyaDDyMmfAvrrizajmLpboo1vcqpKqawY",
    authDomain: "amzon-clone-f8e4e.firebaseapp.com",
    databaseURL: "https://amzon-clone-f8e4e.firebaseio.com",
    projectId: "amzon-clone-f8e4e",
    storageBucket: "amzon-clone-f8e4e.appspot.com",
    messagingSenderId: "357697873675",
    appId: "1:357697873675:web:c5797ecab8c236fc16640e",
    measurementId: "G-3F261MMKNN"
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
 
  export { db , auth };