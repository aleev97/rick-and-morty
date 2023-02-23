import './App.css';
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import {useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from './components/Formulario/Form';
import Favorites from "./components/favoritos/Favorites";

function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters,setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "aleev97@gmail.com";
  const password = "ale1997";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
  }
    useEffect(() => {
      !access && navigate('/');
   }, [access]);

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`) //numero que entra por input: text
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
      {location.pathname === "/" ? <Form login={login} /> : <NavBar onSearch={onSearch}/>}   
       <Routes> 
        <Route path = "/home" element = {<Cards characters={characters} onClose ={onClose} />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/detail/:detailId" element = {<Detail/>} />
        <Route path = "/favorites" element ={<Favorites/>}/>       
       </Routes>
    </div>
  ); 
}

export default App;