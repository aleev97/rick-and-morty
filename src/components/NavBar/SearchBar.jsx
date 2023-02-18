import { useState } from "react";
import style from "./NavBar";

export default function SearchBar(props) {
   const[text,setText] = useState("");

   function handleChange(event){
      console.log(event.target.value);
      setText(event.target.value);
   }
 
   return (
      <div className={style.search}>
         <input type='search' value={text} onChange = {handleChange} />
      <button onClick={()=> props.onSearch(text)}>Agregar</button>
      </div>
   );
}

   