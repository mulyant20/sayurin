import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";

import CardProduct from "../components/CardProduct";
import Navbar from "../components/Navbar";

import { useProductContext } from "../context/ProductContextProvider";

export default function Buah() {
  const [productLocal, setProductLocal] = useState([]);
  const [isToast, setIsToast] = useState(false);
  const [cart, setCart] = useState([]);

  const { product } = useProductContext();

  const addToCart = (selectedItem) => {
    setIsToast(true);
    let idLocal = [...cart];
    let fromLocal = [...productLocal];
    let total = "";

    for (let i in product) {
      if (product[i].id === selectedItem) {
        total = product[i].harga;
      }
    }

    if (!idLocal.includes(selectedItem)) {
      const jum = { jumlah: 1 };
      const newId = selectedItem;
      const subtotal = { subtotal: total };
      const newData = product.filter((item) => item.id === selectedItem);
      newData.push(jum);
      newData.push(subtotal);

      fromLocal.push(newData);
      idLocal.push(newId);

      localStorage.setItem("cart", JSON.stringify(fromLocal));
      localStorage.setItem("idAdded", JSON.stringify(idLocal));

      setCart(idLocal);
      setProductLocal(fromLocal);
      subtotal = { subtotal: 0 };
      total = 0;
    } else {
      console.log("Already added");
    }
  };

  const checkStorage = () => {
    const productfromlocal = localStorage.getItem("cart");
    const idfromlocal = localStorage.getItem("idAdded");

    if (productfromlocal) setProductLocal([...JSON.parse(productfromlocal)]);
    if (idfromlocal) setCart([...JSON.parse(idfromlocal)]);
  };

  useEffect(() => {
    checkStorage();
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
      <div className="my-6 max-w-[1100px] h-fit mx-auto px-6 lg:px-0 flex flex-wrap justify-between lg:justify-start gap-2 lg:gap-4">
        <div className="w-full h-fit">
          <Link href='/'>
            <button className="w-fit h-[32px] flex justify-center items-center hover:bg-gray-200/50 rounded duration-[160ms] ease-in px-3 pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill=""
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
              <span className="ml-2 text-gray-700">Kembali</span>
            </button>
          </Link>
        </div>
        {product
          .filter((item) => item.jenis == "buah")
          .map((item) => {
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
