import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAT1vQbM_0mH8ciE2aIIm6D1Xv3D4rY_Os",
  authDomain: "ecomm-app-react-1603a.firebaseapp.com",
  databaseURL: "https://ecomm-app-react-1603a.firebaseio.com",
  projectId: "ecomm-app-react-1603a",
  storageBucket: "",
  messagingSenderId: "867112143836",
  appId: "1:867112143836:web:1ef315fb9d61dbf6"
};

firebase.initializeApp(config);

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

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collecitonRef = firestore.collection(collectionKey);
  console.log(collecitonRef)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;