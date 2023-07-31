// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore, collection, writeBatch, doc} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8AloNcO13XbmCjzBuaHrwkBdnlMrXjPU",
  authDomain: "cometcoders.firebaseapp.com",
  projectId: "cometcoders",
  storageBucket: "cometcoders.appspot.com",
  messagingSenderId: "849437519919",
  appId: "1:849437519919:web:562111e7a4f218919856da",
  measurementId: "G-MDCMN6LNJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.month.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit()
  console.log('done')
}

