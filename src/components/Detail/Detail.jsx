import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"



export default function Detail () {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect( () => {
        const URL_BASE="https://be-a-rym.up.railway.app/api";
        const KEY = "752c18da900f.0b0e7a7353563377f5ac";

        fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
            setCharacter(char);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);;


    return(
    <div className={styles.divDetail}>
        {character.name ? (        
        <>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt="character" />
        </>
        ):(
            <h3>Loading...</h3>
        )}
    </div>
    )
}

{/* <h2>{character.name}</h2>
<p>{character.status}</p>
<p>{character.species}</p>
<p>{character.gender}</p>
<p>{character.origin?.name}</p>
<img src={character.image} alt="character" /> */}