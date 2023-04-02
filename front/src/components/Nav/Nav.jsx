import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import {Link, NavLink} from "react-router-dom";


export default function NavBar ({onSearch}){
    return (
    <>
        <div className={styles.divNav}>
            <NavLink to = "/Home"><h3>Home</h3></NavLink>
            <Link to = "/Favorites"><h3>Favorites</h3></Link>
            <NavLink to = "/About"><h3>About</h3></NavLink>
        </div>
        <div className={styles.searchBar}>
            <nav>
                <SearchBar onSearch = {onSearch}/>
            </nav>
        </div>
    </>
    );
}