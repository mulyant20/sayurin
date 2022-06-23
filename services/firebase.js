import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDoc, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGIN_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const db = getFirestore(app);

export const createUser = async (user, name, roles) => {
  if (!user) return;
  const { email, uid } = user;

  const userRef = collection(db, "users");

  try {
    await addDoc(userRef, { uid, email: email, name: name, roles: roles });
  } catch (err) {
    console.log("err", err);
  }
};