//The setup of firebase, linking it in my proyect
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjUeB6xoAhs05Hlt2vc7jpZCbBdROCJU4",
  authDomain: "react-coderhouse-b9a2d.firebaseapp.com",
  projectId: "react-coderhouse-b9a2d",
  storageBucket: "react-coderhouse-b9a2d.appspot.com",
  messagingSenderId: "1045629818529",
  appId: "1:1045629818529:web:62b89c404f3361eb2502e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreApp = () => {
    return app
}
export default firestoreApp