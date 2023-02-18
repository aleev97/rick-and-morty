import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
export default function Card({ name, species, gender, image, onClose, id }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.close} onClick={onClose}>X</button>
      </div>
      <Link to={`/detail/${id}`} >
        <h2 className={styles.nombre}>{name}</h2>
        <h2 className={styles.especie}>{"👾: " + species}</h2>
        <h2 className={styles.genero}> {"🚻: " + gender}</h2>
        <img className={styles.fondo} src={image} alt={name} />
      </Link>
    </div>
  );
}
   