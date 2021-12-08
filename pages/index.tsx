import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MetamaskDelegatedAccess } from '../src/lib/MetamaskDelegatedAccess'
import Navbar from '../src/components/Navbar/Navbar'
import styles from '../styles/Home.module.scss'

const metamask = new MetamaskDelegatedAccess()
const connectMetamask = async () => {
  const {client, address} = await metamask.connect()
  console.log('metamask connected', address, client)
}

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

      <main className={styles.main}>
        <nav>
          <h4 className={styles.title}>Streamr.Chat</h4>
          <button className={styles.connect} onClick={() => connectMetamask() } >Connect a wallet</button>
        </nav>
        <h2 className={styles.helloworld}>Hello world.</h2>
        <Link href='/chat'>
          <button className={styles.createRoomButton}><span className={styles.createRoomButtonText}>Create new room</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20C9.741 20 9.49261 19.8971 9.30947 19.714C9.12632 19.5308 9.02344 19.2824 9.02344 19.0234V0.976562C9.02344 0.717562 9.12632 0.46917 9.30947 0.286029C9.49261 0.102888 9.741 0 10 0C10.259 0 10.5074 0.102888 10.6905 0.286029C10.8737 0.46917 10.9766 0.717562 10.9766 0.976562V19.0234C10.9766 19.2824 10.8737 19.5308 10.6905 19.714C10.5074 19.8971 10.259 20 10 20Z" fill="white"/>
              <path d="M19.0234 10.9766H0.976562C0.717562 10.9766 0.46917 10.8737 0.286029 10.6905C0.102888 10.5074 0 10.259 0 10C0 9.741 0.102888 9.49261 0.286029 9.30947C0.46917 9.12632 0.717562 9.02344 0.976562 9.02344H19.0234C19.2824 9.02344 19.5308 9.12632 19.714 9.30947C19.8971 9.49261 20 9.741 20 10C20 10.259 19.8971 10.5074 19.714 10.6905C19.5308 10.8737 19.2824 10.9766 19.0234 10.9766Z" fill="white"/>
            </svg>
          </button>
        </Link>
        <span className={styles.streamrPlug}>Decentralised, encrypted chat powered by <a target='_blank' rel='noreferrer' href="https://streamr.network">Streamr</a></span>
      </main>
    </div>
  )

}

export default Home
