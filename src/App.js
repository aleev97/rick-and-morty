import './App.css';
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";


function App () {
   
  const [characters,setCharacters] = useState([]);

  function onSearch(text) {
    fetch(`https://rickandmortyapi.com/api/character/${text}`)
      .then((response) => response.json())
      .then((data) => { 
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }); 
  }

  function onClose(id){
    setCharacters(characters.filter(personaje => personaje.id !== id))
  }

  return (
    <div className='App' styles={{ padding: '25px' }}>
      <NavBar onSearch={onSearch} />   
       <Routes>
        <Route path="/home" element = {<Cards characters={characters} onClose ={onClose} />} />
        <Route path="/about" element = {<About />} />
        <Route path="/detail/:detailId" element = {<Detail/>} />
       </Routes>
    </div>
  ); 
}

export default App;
