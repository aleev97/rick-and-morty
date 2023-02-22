import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
    return (
        <div className={styles.contenedor}>

            <img className={styles.logo} src="https://pngimg.com/uploads/rick_morty/small/rick_morty_PNG39.png" alt="logo" />
             
                <Link to="/home" className={styles.home}>
                    <span>Home</span>
                </Link>
            
                <Link to="/About" className={styles.about}>
                    <span>About</span>
                </Link>

                <Link to="/favorites" className={styles.favorite}>
                <span>Favorite</span>
                </Link>

            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}
