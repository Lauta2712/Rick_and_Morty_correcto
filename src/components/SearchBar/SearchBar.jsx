import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {
      const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };


   return (
      <div className={styles.searchBar}>
         <input type='search' onChange={handleChange}/>
         <button onClick={() => {onSearch(id)} }>Agregar Personaje</button>
      </div>
   );
}
