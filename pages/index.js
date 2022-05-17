import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rahul's world</title>
      </Head>
    <Link href = "/about">About</Link>
    <h1 className={styles.homePageTitle}>hello world</h1>
    </div>
  )
}
