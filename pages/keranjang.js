import NavbarDetail from "../components/NavbarDetail";
import CartProduct from "../components/CartProduct";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Keranjang() {
  const [productCart, setProductCart] = useState([]);
  const localCart = [];
  const router = useRouter();

  const checkStorage = (key) => {
    const local = localStorage.getItem(key);
    localCart = JSON.parse(local);
  };

  const deleteAllCart = () => {
    localStorage.removeItem("cart");
    router.reload(window.location.pathname);
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
      <NavbarDetail path="/" title="Keranjang" />
      <div className="mt-6 max-w-[500px] h-fit mx-auto px-6 lg:px-0 flex flex-col justify-between gap-[24px] lg:gap-[32px]">
        {productCart != '' ? (
          <>
            <div className="flex justify-end">
              <button className="text-red-500 text-sm" onClick={deleteAllCart}>
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
                />
              );
            })}
            <div className="w-full h-fit flex justify-end">
              <Button goto path='/checkout' text='Checkout' />
            </div>
          </>
        ) : (
          <div className="w-full h-40 flex items-center justify-center">tidak ada</div>
        )}
      </div>
    </>
  );
}
