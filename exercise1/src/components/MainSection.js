import React from 'react'
import styles from './MainSection.module.css'

export default function MainSection(props) {

   

    return (
        
        <div className= { styles.container }>
        <br /><br /><img src="/Oamklogo.png" alt=""/><br /><br />
        
         <span className={ styles.header, styles.brand }>{ props.topic } </span> 
         <span className={ styles.brand2 }>{ props.body } </span>
         
        </div>
        
        
    )
}
