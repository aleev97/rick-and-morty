import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch , useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite,deleteFavorite } from "../../../redux/actions";

export default function Card({ name, species, gender, image, onClose, id }) {
  
  const myFavorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();
  const[isFav,setIsFav] = useState(false);

  const handleFavorite = ()=>{
    if(isFav){
      setIsFav(false);
      dispatch(deleteFavorite(id));
    }
    else{
      setIsFav(true);
      dispatch(addFavorite({ name, species, gender, image, onClose, id }));
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
    <div className={styles.cardContainer}>

      {
        isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )
      }

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
   