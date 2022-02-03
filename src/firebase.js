import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvu_eA6OVlc0mJfw60K8LMTNcNfBQfn2U",
    authDomain: "fir-21323.firebaseapp.com",
    databaseURL: "https://fir-21323-default-rtdb.firebaseio.com",
    projectId: "fir-21323",
    storageBucket: "fir-21323.appspot.com",
    messagingSenderId: "176117928879",
    appId: "1:176117928879:web:2a25a203bac2ce8a2d555a"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();