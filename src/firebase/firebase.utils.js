import firebase from 'firebase/app';
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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });




export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;








