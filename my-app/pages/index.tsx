import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

type arrayPokemon = {
  name:string,
  url:string,
  id:number
}

export async function getStaticProps(){

  const maxPokemons:number = 251
  const api:string = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()


  data.results.forEach((item:arrayPokemon,index:number)=>{
    item.id = index + 1
    console.log(item)
  })

  return{
    props:{
      pokemons:data.results,
    }
  }

}

export default function home({pokemons}:any){
  return(
    <>
      <div className={styles.title_container}>
        <h1>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="pokedex" ></Image>
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon:arrayPokemon)=>(
          <p key={pokemon.id} >{pokemon.name}</p>
        ))}
      </div>
    </>
    
  )
}




