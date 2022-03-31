import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <Layout>
      <NavBar />
    </Layout>
  )
}

export default Home
