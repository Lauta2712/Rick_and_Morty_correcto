import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions";
import {connect} from 'react-redux';
import { useState, useEffect } from "react";

function Card({
   id, 
   name, 
   species, 
   gender, 
   image, 
   onClose, 
   addFavorite, 
   removeFavorite, 
   myFavorites,
}) {


   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false)
         removeFavorite(id)
      } else {
         setIsFav(true)
         addFavorite({
            id, 
            name, 
            species, 
            gender, 
            image, 
            onClose,
         })
      }
   }


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (

      <div className={styles.divContenedor}>

         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }


         <button onClick={() => onClose(id)}>
            X
         </button>

         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>         
         </Link>
         <img src={image} alt="personaje"/>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },

      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }

   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);