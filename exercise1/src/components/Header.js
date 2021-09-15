import React from 'react'
import styles from './Header.module.css';


export default function Header() {

  //  const demo = { color: 'white', backgroundColor: 'green' }
  //  demo.fontSize = '30px';
  const space = {margin: '12px'};

    return (
        <div className={ styles.headerBackground }>
        <div className={ styles.container }>
            <div className={ styles.brand }> HELSINGIN SANOMAT </div>
            <div style = { space }></div> 
            <div>Uutiset</div>
            <div style = { space }></div> 
            <div>Lehdet</div>
            <div className={ styles.padding }></div>
            <div style = { space }>Tilaa</div>
            <div>Kirjaudu</div>
            <div style = { space }>Valikko</div>
            </div>

            </div>                                    
        
    )
}
