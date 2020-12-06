import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYjWXmORM6Pgzg-TiqkhwDLW_kfILYFDo",
  authDomain: "portalnoticias-ed8cd.firebaseapp.com",
  projectId: "portalnoticias-ed8cd",
  storageBucket: "portalnoticias-ed8cd.appspot.com",
  messagingSenderId: "498785449018",
  appId: "1:498785449018:web:9c3395d0f100f2f365f103"
});

const db = firebase.firestore();
export {db};