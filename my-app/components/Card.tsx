import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Card.module.scss'

export default function Card({pokemon}:any){
    return(
        <div className={styles.card}>
           <Image 
           width={"120"}
           height={"120"}
           alt={pokemon.name}
           src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
           
           <p>#{pokemon.id}</p>
           <h3>{pokemon.name}</h3>
           <Link  className={styles.btn} href={`/pokemon/${pokemon.id}`}>
             Detalhes
           </Link>
        </div>
    )

}