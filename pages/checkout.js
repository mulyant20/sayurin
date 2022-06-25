import ModalCheckout from "../components/ModalCheckout";
import CheckoutProduct from "../components/CheckoutProduct";
import NavbarDetail from "../components/NavbarDetail";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Radio from "../components/Radio";
import Head from "next/head";


export default function Checkout() {
  const [productCart, setProductCart] = useState([]);
  const [metodeBayar, setMetodeBayar] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const localCart = [];

  const checkStorage = (key) => {
    const local = localStorage.getItem(key);
    localCart = JSON.parse(local);
  };

  const handleMetodebayar = e => {
    setMetodeBayar(e.target.value)
  }

  const handleModal = () => setIsModalOpen(true)

  useEffect(() => {
    checkStorage("cart");
    if (localCart) setProductCart(localCart);
  }, []);

  return (
    <>
      <Head>
        <title>Checkout | sayurin</title>
        <meta
          name="description"
          content="Sayurin ecommerce jual beli sayuran dengan jaminan kualitas terbaik"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <NavbarDetail title="Detail Pengiriman" goto path="keranjang" />
      <div className="mt-6 max-w-[500px] h-fit mx-auto px-6 lg:px-0 flex flex-col justify-between gap-[24px] lg:gap-[32px] relative">
        {productCart.map((item, i) => {
          return (
            <CheckoutProduct
              key={productCart[i][0].id}
              nama={productCart[i][0].nama}
              harga={productCart[i][0].harga}
              satuan={productCart[i][0].satuan}
              diskon={productCart[i][0].diskon}
              jumlah='10'
              subtotal='30000'
            />
          );
        })}
        <div className="mt-2 flex flex-col gap-2">
            <p className="font-semibold text-gray-700">Pilih metode pembayaran</p>
            <Radio
                name='bayar'
                value='bca'
                id='bca'
                label='BCA virtual account'
                change={handleMetodebayar}
            />
            <Radio
                name='bayar'
                value='cod'
                id='cod'
                label='COD (bayar ditempat)'
                change={handleMetodebayar}
            />
            <Radio
                name='bayar'
                value='ovo'
                id='ovo'
                label='Ovo'
                change={handleMetodebayar}
            />
        </div>
        {!isModalOpen && <div className="flex justify-end">
            <Button text='Konfirmasi pembayaran' click={handleModal} />
        </div>}
        {isModalOpen && <ModalCheckout click={() => setIsModalOpen(false)}/>}
      </div>
    </>
  );
}
