import React from 'react'
import styles from './SideSection.module.css'

export default function SideSection(props3) {
    return (
        <div className= { styles.container }>
        <div>
            <div className= { styles.container }>
            <span className={ styles.header, styles.brand }>{ props3.topic }: </span> { props3.body }
            </div>
        </div>
        </div>
    )
}