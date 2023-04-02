import React from "react";
// import styles from "./Favorites.module.css"
import Card from "../Card/Card"
import { useSelector } from "react-redux";

function Favorites(){

    const favorites = useSelector(state => state.myFavorites);

    return (
        <div>            
            {favorites.map(({ id, name, species, gender, image }) => {
            return (
                <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                />
                )})
            }
        </div>
    )
}

export default Favorites;
