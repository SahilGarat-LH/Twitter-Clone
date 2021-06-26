// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDR-InbQPgctZuslzZEzBaL2rNegpsa2Lc",
    authDomain: "twitter-4dd48.firebaseapp.com",
    projectId: "twitter-4dd48",
    storageBucket: "twitter-4dd48.appspot.com",
    messagingSenderId: "202371957340",
    appId: "1:202371957340:web:0a28c790d3cddb11929c99",
    measurementId: "G-33152RM6Q8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;

//   Connected firebase to backend