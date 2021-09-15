import React from 'react'
import styles from './Title.module.css';

export default function Title() {

    const space = {margin: '12px'};

    return(

        <div className={ styles.titleBackground }>
        <div className={ styles.container }>
        <div> Etusivu </div>
            <div style = { space }></div> 
            <div>HS Visio</div>
            <div style = { space }></div> 
            <div>Luetuimmat</div>
            <div style = { space }>Uusimmat</div>
            <div>Politiikka</div>
            <div style = { space }>Kaupunki</div>
            <div>Kulttuuri</div>
            <div style = { space }>Tiede</div>
            <div>Hyvinvointi</div>
            <div style = { space }>Ruoka</div>
            <div>Nyt</div>
            

            </div>

            </div>                          


            
    )


}
