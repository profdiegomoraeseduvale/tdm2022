import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCz-m-IbwFyWjV5sniQNUsGJcymcSOfGZA",
    authDomain: "aula-tdm-2022.firebaseapp.com",
    projectId: "aula-tdm-2022",
    storageBucket: "aula-tdm-2022.appspot.com",
    messagingSenderId: "263141830963",
    appId: "1:263141830963:web:b9f0e36429a08f8b654e46"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);