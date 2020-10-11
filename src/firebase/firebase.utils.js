import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFVhG8RXysgIbNT-mDsNx7n4E2xm-Swtc",
    authDomain: "seniorecommerce-3c001.firebaseapp.com",
    databaseURL: "https://seniorecommerce-3c001.firebaseio.com",
    projectId: "seniorecommerce-3c001",
    storageBucket: "seniorecommerce-3c001.appspot.com",
    messagingSenderId: "992258629267",
    appId: "1:992258629267:web:e4b6f42b2690b8bd6f7766",
    measurementId: "G-H7XCGXCWGM"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;








