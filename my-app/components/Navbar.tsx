import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Navbar.module.scss'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>
               <Image 
               src="/images/pokeball.png"
               width="30"
               height="30"
               alt="PokeNext"

               ></Image>
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link className={styles.linkStyle} href={'/'}>Home</Link>
                </li>
                <li>
                    <Link className={styles.linkStyle} href={'/about'}>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}