import Card from './Card/Card';
import React from 'react';
import styles from "./cards.module.css";
//import { useParams } from 'react-router-dom';

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return (
   <div className={styles.contenedor}>
      {characters ? (
         characters.map((element)=>(
         <Card 
           name={element.name}
           species={element.species}
           gender={element.gender}
           image={element.image}
           onClose={()=> onClose(element.id)}
           key={element.id}
           id ={element.id} 
         /> 
         ))
         ) : (
            <h3>No hay personajes</h3>
      )}
   </div>
   ); 
}
