import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
    return (
        <div className={styles.contenedor}>
            <Link to="/home">
                <span className={styles.home}>Home</span>
            </Link>

            <SearchBar onSearch={props.onSearch} />
            
            <Link to ="/About">
                <span className={styles.about}>About</span>
            </Link>
        </div>
    ); 
}

 