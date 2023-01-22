import Image from "next/image"

import styles from '../styles/About.module.scss'

export default function About(){
    return(
        <div className={styles.about} >
           <h1>Sobre o Projeto</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim impedit suscipit ullam. Placeat laudantium, at veniam natus ullam sit eos quo perspiciatis, cupiditate praesentium doloribus ipsum, beatae ad explicabo animi?</p>
           <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"></Image>
        </div>
    )
}