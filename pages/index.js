import Head from 'next/head'
import CardProduct from '../components/CardProduct'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sayurin</title>
        <meta name="description" content="Sayurin ecommerce jual beli sayuran dengan jaminan kualitas terbaik" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <div className='mt-6 max-w-[1100px] h-40 mx-auto px-6 lg:px-0 flex flex-wrap justify-between gap-4 gap-y-4'>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  )
}
