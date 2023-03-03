import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   const[character,setCharacter] = useState("");

   function handleChange(event){
      console.log(event.target.value);
      setCharacter(event.target.value);  
   }
 
   return (
      <div>
         <input className={style.inp} type='search' value={character} onChange = {handleChange}/>
         <button className={style.botagregar} onClick={()=>props.onSearch(character)}>Agregar</button>
      </div>  
   );
}

   