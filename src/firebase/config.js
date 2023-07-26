import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtGLEB0Ehnxesu_Do5_1MNSbzUI4L1-8Q",
  authDomain: "miniblog2-66605.firebaseapp.com",
  projectId: "miniblog2-66605",
  storageBucket: "miniblog2-66605.appspot.com",
  messagingSenderId: "218828450765",
  appId: "1:218828450765:web:d85ee5e8f74cb85f11b284"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
