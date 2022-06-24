import Head from "next/head";
import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import Navbar from "../components/Navbar";
import { useProductContext } from "../context/ProductContextProvider";

export default function Home() {
  const { product } = useProductContext();
  const [cart, setCart] = useState([]);

  const addToCart = (selectedItem) => {
    let array = [...cart];
    
    if (!array.includes(selectedItem)) {
      const newData = product.filter((item => item.id === selectedItem))
      array.push(newData);
      localStorage.setItem("cart", JSON.stringify(array));
      setCart(array);
    } else {
      console.log("Already added");
    }
  };

  const checkStorage = (key) => {
    const localcart = localStorage.getItem(key);
    if (localcart) setCart(JSON.parse(localcart))
 }

 useEffect(() => {
  checkStorage('cart')

 }, [])


  return (
    <div>
      <Head>
        <title>Sayurin</title>
        <meta
          name="description"
          content="Sayurin ecommerce jual beli sayuran dengan jaminan kualitas terbaik"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <div className="mt-6 max-w-[1100px] h-40 mx-auto px-6 lg:px-0 flex flex-wrap justify-between gap-2 lg:gap-4">
        {product.map((item) => {
          return (
            <CardProduct
              key={item.id}
              nama={item.nama}
              harga={item.harga}
              satuan={item.satuan}
              jumbeli={item.jumBeli}
              diskon={item.diskon}
              click={() => addToCart(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
