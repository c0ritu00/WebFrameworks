import React from 'react'
import styles from './NewsNotification.module.css'

export default function NewsNotification(props2) {
    return (
        
        <div className= { styles.container }> 
        <span className={ styles.header }>{ props2.topic }: </span> { props2.body } </div>
        
        
    )
}
