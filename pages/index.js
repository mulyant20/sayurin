import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import CardProduct from "../components/CardProduct";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";

import { useProductContext } from "../context/ProductContextProvider";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [productLocal, setProductLocal] = useState([]);
  const [isToast, setIsToast] = useState(false);

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
      <div className="my-6 max-w-[1100px] h-fit mx-auto px-6 lg:px-0 flex flex-wrap justify-between gap-2 lg:gap-4">
        <div className="w-full flex justify-between lg:justify-center gap-4 mb-3">
          <Link href="/favorit">
            <span>
              <Category src="favor" text="Favorit" />
            </span>
          </Link>
          <Link href="/buah">
            <span>
              <Category src="buah" text="Buah" />
            </span>
          </Link>
          <Link href="/sayuran">
            <span>
              <Category src="sayur" text="Sayuran" />
            </span>
          </Link>
          <Link href="/diskon">
            <span>
              <Category src="diskon" text="Diskon" />
            </span>
          </Link>
        </div>
        {product.map((item) => {
          return (
            <CardProduct
              key={item.id}
              nama={item.nama}
              harga={item.harga}
              satuan={item.satuan}
              jumbeli={item.jumBeli}
              diskon={item.diskon}
              img={item.img}
              favor={item.favor}
              click={() => addToCart(item.id)}
            />
          );
        })}
      </div>
      {isToast && <Toast text="Produk berhasil ditambah" />}
    </div>
  );
}
