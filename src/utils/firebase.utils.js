// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyD_4shUdXKt6gbl2jxU3IBRrS6ktI6qMoQ",
//     authDomain: "newlearnhub-da0cd.firebaseapp.com",
//     projectId: "newlearnhub-da0cd",
//     storageBucket: "newlearnhub-da0cd.appspot.com",
//     messagingSenderId: "331986547009",
//     appId: "1:331986547009:web:3b6717306e162f398371c0",
//     measurementId: "G-5CK4NC6R8W"
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyDfnAY2Y_kAaqWPasi_EApb_MJStOm5a-k",
//     authDomain: "learnhub-a3bd7.firebaseapp.com",
//     projectId: "learnhub-a3bd7",
//     storageBucket: "learnhub-a3bd7.appspot.com",
//     messagingSenderId: "423354683728",
//     appId: "1:423354683728:web:c5e1ee1ed09169bee19c55",
//     measurementId: "G-8S1TRQW4SS"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAtQpwU_PJiZbemMTJdtOlpFYfIwj7nEMA",
  authDomain: "learnhub-91f50.firebaseapp.com",
  projectId: "learnhub-91f50",
  storageBucket: "learnhub-91f50.appspot.com",
  messagingSenderId: "756125557496",
  appId: "1:756125557496:web:0b61cebf5a6e6ed3e5910d",
  measurementId: "G-X1XLS74DCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();

export const SignInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const SignInWithGithubPopUp = () =>
  signInWithPopup(auth, githubProvider);
export const SignInWithFacebookPopUp = () =>
  signInWithPopup(auth, facebookProvider);

export const createUserDatabase = async (user) => {
  const docRef = doc(db, "user", user.uid);
  const docSnap = await getDoc(docRef);

  try {
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        date: new Date(),
      });
    } else {
      return docSnap.data();
    }
  } catch (error) {
    console.log("error in database", error);
  }
};

export const SignUpWithEmailPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password).catch((error) =>
    console.log(error.message)
  );

export const SignInWithEmailPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password).catch((error) =>
    console.log(error.message)
  );

export const UserSignedIn = () => onAuthStateChanged(auth);

export const SignOut = () => signOut(auth);
