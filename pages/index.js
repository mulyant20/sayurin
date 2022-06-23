import Head from 'next/head'
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
    </div>
  )
}
