// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD_4shUdXKt6gbl2jxU3IBRrS6ktI6qMoQ",
    authDomain: "newlearnhub-da0cd.firebaseapp.com",
    projectId: "newlearnhub-da0cd",
    storageBucket: "newlearnhub-da0cd.appspot.com",
    messagingSenderId: "331986547009",
    appId: "1:331986547009:web:3b6717306e162f398371c0",
    measurementId: "G-5CK4NC6R8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const auth = getAuth()
export const db = getFirestore(app)

export const SignInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const SignInWithGithubPopUp = () => signInWithPopup(auth, githubProvider);

export const createUserDatabase = async user => {
    const docRef = doc(db, "user", user.uid)
    const docSnap = await getDoc(docRef)

    try{
        if(!docSnap.exists()){
            await setDoc((docRef), {
                displayName: user.displayName,
                email: user.email,
                date: new Date()
            })
        }
        else{
            console.log(docSnap.data())
        }
    }
    catch(error){
        console.log("error in database", error)
    }
}

export const SignUpWithEmailPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password).catch(error => console.log(error.message))

export const SignInWithEmailPassword = (email, password) => signInWithEmailAndPassword(auth, email, password).catch(error => console.log(error.message))