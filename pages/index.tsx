import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CTA from '../components/CTA'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CTA />
    </div>
  )
}

export default Home
