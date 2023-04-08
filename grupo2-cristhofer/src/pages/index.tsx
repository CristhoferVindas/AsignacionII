import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Dashboard } from './root/components/dashboard/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export interface NewItemData{
  title:string,
  description:string,
}

const fakeNewsData: NewItemData[] =
  [
    {title:"First new", description:"First long description with details"},
    {title:"Second new", description:"Second long description with details"},
    {title:"Third new", description:"Third long description with details"},
    {title:"Fourth new", description:"Fourth long description with details"},
    {title:"Fifth new", description:"Fifth long description with details"},
    {title:"Sixth new", description:"Sixth long description with details"}
  ]
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Dashboard items={fakeNewsData}/>

      </main>
    </>
  )
}
