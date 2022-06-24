import { async } from "@firebase/util";
import Head from "next/head";
import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import Navbar from "../components/Navbar";
import { useProductContext } from "../context/ProductContextProvider";

export default function Keranjang() {
  const [productCart, setProductCart] = useState([]);
  const localCart = [];

  const checkStorage = (key) => {
    const local = localStorage.getItem(key);
    localCart = JSON.parse(local);
  };

  useEffect(() => {
    checkStorage("cart");
    if (localCart) setProductCart(localCart);
  }, []);
  
  return (
    <>
      <Head>
        <title>Keranjang| | sayurin</title>
        <meta
          name="description"
          content="Sayurin ecommerce jual beli sayuran dengan jaminan kualitas terbaik"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <div className="mt-6 max-w-[1100px] h-40 mx-auto px-6 lg:px-0 flex flex-wrap justify-between gap-2 lg:gap-4">
        {productCart.map((item,i) => {
            return (
                <CardProduct
                  key={productCart[i][0].id}
                  nama={productCart[i][0].nama}
                  harga={productCart[i][0].harga}
                  satuan={productCart[i][0].satuan}
                  jumbeli={productCart[i][0].jumBeli}
                  diskon={productCart[i][0].diskon}
                  click={() => addToCart(productCart[i][0].id)}
                />
              );
        })}
      </div>
    </>
  );
}
