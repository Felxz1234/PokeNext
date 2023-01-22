import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function home(){
  return(
    <>
      <Head>
         <title>Home</title>
         <meta name='keywords' content='Roupas,Bonés'></meta>
      </Head>
      <div>
        <h1>home page</h1>
      </div>
    </>
    
  )
}




