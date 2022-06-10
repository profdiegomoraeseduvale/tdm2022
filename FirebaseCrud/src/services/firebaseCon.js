import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCz-m-IbwFyWjV5sniQNUsGJcymcSOfGZA",
  authDomain: "aula-tdm-2022.firebaseapp.com",
  databaseURL: "https://aula-tdm-2022-default-rtdb.firebaseio.com",
  projectId: "aula-tdm-2022",
  storageBucket: "aula-tdm-2022.appspot.com",
  messagingSenderId: "263141830963",
  appId: "1:263141830963:web:b9f0e36429a08f8b654e46"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
