import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';




export default function StarRating(props){
   

    if (props.itemRating === 1){
        return (
        <>
            <FaStar color="gold" />
            <FaStar color="grey" />
            <FaStar color="grey" />
            <FaStar color="grey" />
            <FaStar color="grey" />
        </>
        )
        }
        else if(props.itemRating === 2)
        {
        return(
        <>
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="grey" />
            <FaStar color="grey" />
            <FaStar color="grey" />
        </>)
        }
        else if(props.itemRating === 3)
        {
        return(
        <>
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="grey" />
            <FaStar color="grey" />
        </>)
        }
        else if(props.itemRating === 4)
        {
        return(
        <>
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="grey" />
        </>)
        }
    
        else if(props.itemRating === 5)
        {
        return(
        <>
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
        </>)
        }
    
        if (props.itemRating === 0){
            return (
            <>
                <FaStar color="grey" />
                <FaStar color="grey" />
                <FaStar color="grey" />
                <FaStar color="grey" />
                <FaStar color="grey" />
            </>
            )
            }
    
}



// const StarRating = (this.props.) => {
//     return (
//     <div>
//         {[ ...Array(5)].map(() => {           
//             return <FaStar color={"gold"}/>  
//         })}
        
//     </div>
//     )
// }