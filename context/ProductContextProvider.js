import { db } from "../services/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const productContext = createContext();

export function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  const productRef = collection(db, "products");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(productRef);
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
}, []);

  return (
    <productContext.Provider value={{ product }}>
      {children}
    </productContext.Provider>
  );
}

export function useProductContext() {
  return useContext(productContext);
}
