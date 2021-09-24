  
import React from 'react';
import styles from './SearchResult.module.css';
import StarRating from './StarRating';

export default function SearchResult(props) {
  return (

     

    <div className={ styles.product }>
        <div>
          <div className={ styles.BestSeller }>Best Seller <div className={ styles.edge }></div></div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>{ props.type }</div>
          
          <StarRating itemRating= { props.rating }/>

        <div className={ styles.flex }> 
            <sup>$</sup>
            <div className=
                { styles.priceFont}>                  
                { props.price }
                </div>
                    <div className={ styles.shippingFont }>
                    { props.shipping }
                    </div>              
        </div>  

          <br></br>

          <div className={ styles.ArrDate }><div>{ props.status }</div></div>
          
        </div>
    </div>

    
  )
}





