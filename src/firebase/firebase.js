import firebase from "firebase";
import 'firebase/firebase';

// La configuración de Firebase de su aplicación web
var firebaseConfig = {
    apiKey: "AIzaSyDBUY51R5vyciwP5aU3rv5-fLJF4GZbFho",
    authDomain: "tienda-martinez.firebaseapp.com",
    projectId: "tienda-martinez",
    storageBucket: "tienda-martinez.appspot.com",
    messagingSenderId: "903181180205",
    appId: "1:903181180205:web:632e3b8b14e2e330c3c7a4"
};

// Inicializando Firebase
const fb = firebase.initializeApp(firebaseConfig);

// Disponible para todos
export const database = fb.firestore();