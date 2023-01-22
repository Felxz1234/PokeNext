import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from "next/head";


export default function Layout({children}:any){
    return(
            <>
               <Head>
                 <title>PokeNext</title>
               </Head>

               <Navbar></Navbar>
               <main className="main-container" >{children}</main>
               <Footer></Footer>
            </>
        
    )
}