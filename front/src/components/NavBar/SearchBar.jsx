import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   const[text,setText] = useState("");

   function handleChange(event){
      console.log(event.target.value);
      setText(event.target.value);
   }
 
   return (
      <div>
         <input className={style.inp} type='search' value={text} onChange = {handleChange} />
      <button className={style.botagregar} onClick={()=> props.onSearch(text)}>Agregar</button>
      </div>
   );
}

   