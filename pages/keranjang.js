import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useUserAuth } from "../context/UserAuthContextProvider";

import NavbarDetail from "../components/NavbarDetail";
import CartProduct from "../components/CartProduct";
import Button from "../components/Button";
import Toast from "../components/Toast";

export default function Keranjang() {
  const [isToast, setIsToast] = useState(false)
  
  const [productCart, setProductCart] = useState([]);
  const router = useRouter();
  const { user } = useUserAuth();
  const localCart = [];

  const checkStorage = (key) => {
    const local = localStorage.getItem(key);
    localCart = JSON.parse(local);
  };

  const deleteAllCart = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("idAdded");
    router.reload(window.location.pathname);
  };

  const handleCheckout = () => {

    !user
      ? setIsToast(true)
      : router.push('checkout')
  }

  useEffect(() => {
    checkStorage("cart");
    if (localCart) setProductCart(localCart);
  }, []);

  useEffect(() => {
    if (isToast) {
      const startToast = setTimeout(() => {
        setIsToast(false);
        clearTimeout(startToast);
      }, 1200);
    }
  }, [isToast]);

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
      <NavbarDetail path="/" title="Keranjang" />
      <div className="mt-6 max-w-[500px] h-fit mx-auto px-6 lg:px-0 flex flex-col justify-between gap-[24px] lg:gap-[32px]">
        {productCart != "" ? (
          <>
            <div className="flex justify-end">
              <button className="text-red-500 text-sm px-3 py-[2px] hover:bg-red-400 hover:text-white duration-[50ms] ease-in rounded" onClick={deleteAllCart}>
                Hapus daftar
              </button>
            </div>
            {productCart.map((item, i) => {
              return (
                <CartProduct
                  key={productCart[i][0].id}
                  nama={productCart[i][0].nama}
                  harga={productCart[i][0].harga}
                  satuan={productCart[i][0].satuan}
                  diskon={productCart[i][0].diskon}
                  jum={productCart[i][1].jumlah}
                  img={productCart[i][0].img}
                  subtotal={productCart[i][2].subtotal}
                />
              );
            })}
            <div className="w-full h-fit flex justify-end fixed bottom-6 right-6 lg:bottom-0 lg:right-0 lg:static">
              <Button text='Checkout' click={handleCheckout}/>
            </div>
          </>
        ) : (
          <div className="w-full h-40 flex items-center justify-center">
            tidak ada
          </div>
        )}
      </div>
      {isToast && <Toast text='Anda belum login' />}
    </>
  );
}
