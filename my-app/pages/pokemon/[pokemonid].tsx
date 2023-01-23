import Image from "next/image"
import { type } from "os"
import styles from '../../styles/Pokemon.module.scss'

export const getStaticPaths = async() =>{

    type arrayPokemon = {
        name:string,
        url:string,
        id:number
      }

    const maxPokemons:number = 251
    const api:string = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    //params

    const paths = data.results.map((pokemon:arrayPokemon,index:number)=>{
        return{
            params:{pokemonid:(index+1).toString()}
        }
    })

    return {
        paths,
        fallback:false
    }

}

export const getStaticProps = async(context:any) =>{

    

    const id = context.params.pokemonid

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)


    const data = await res.json()

    return{
        props:{pokemon:data},
    }

}

export default function Pokemon({pokemon}:any){

    type typeofPokemon = {
        type:string[]
    }

    return(
        <div className={styles.pokemon_container} >
            <h1>{pokemon.name}</h1>
            <Image 
            width={'200'}
            alt={pokemon.name}
            height="200"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}></Image>
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item:any,index:number)=>(
                        <span className={`${styles.type} ${styles['type_'+item.type.nae]}`} key={index}>{item.type.name}</span>                       
                    ))}
                </div>
            </div>
            <div className={styles.data_container} >
                <div className={styles.data_height} >
                    <h4>Altura:</h4>
                    <p>{pokemon.height *10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight/10} kg</p>
                </div>
            </div>
        </div>
    )
}