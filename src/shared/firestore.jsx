import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1RbTzGvYglWwXlLziEKiCI6hebJ_mo6o",
    authDomain: "mymusicplaylist-fdcce.firebaseapp.com",
    databaseURL: "https://mymusicplaylist-fdcce.firebaseio.com",
    projectId: "mymusicplaylist-fdcce",
    storageBucket: "mymusicplaylist-fdcce.appspot.com",
    messagingSenderId: "693727611396",
    appId: "1:693727611396:web:b1a97e56d6167e8a"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;
