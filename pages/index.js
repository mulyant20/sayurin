import Head from 'next/head'
import CardProduct from '../components/CardProduct'
import Navbar from '../components/Navbar'
import { useProductContext } from '../context/ProductContextProvider'

export default function Home() {
  const { product } = useProductContext()
  console.log(product)
  return (
    <div>
      <Head>
        <title>Sayurin</title>
        <meta name="description" content="Sayurin ecommerce jual beli sayuran dengan jaminan kualitas terbaik" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <div className='mt-6 max-w-[1100px] h-40 mx-auto px-6 lg:px-0 flex flex-wrap justify-between gap-4 gap-y-4'>
        {product.map(item => {
          return <CardProduct key={item.id} nama={item.nama} harga={item.harga} satuan={item.satuan} jumbeli={item.jumBeli} />
        })}
      </div>
    </div>
  )
}
