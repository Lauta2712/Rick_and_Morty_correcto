import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites'
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'


function App () {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'lautarorodriguez887@gmail.com';
  const password = '1234hola';
  
  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);



  
  const onSearch = (id) => {
    const URL_BASE="https://be-a-rym.up.railway.app/api";
    const KEY = "752c18da900f.0b0e7a7353563377f5ac";
    
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.name && !characters.find((char)=> char.id === data.id )) {
          setCharacters((oldChars) => [...oldChars, data]);
      } else {
          alert('No hay personajes con ese ID');
      }
    });
  };


const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id ))
}

  const location = useLocation();

  return (
  <div>
    {location.pathname !== "/" && <NavBar onSearch = {onSearch}/>}
    <Routes>
      <Route path="/" element= {<Form login={login}/>} />
      <Route path="/about" element = {<About/>}/>
      <Route path="/favorites" element = {<Favorites onClose = {onClose}/>}/>
      <Route path="/home" element = {<Cards characters={characters} onClose = {onClose} />}/>
      <Route path="/detail/:detailId" element = {<Detail/>}/>
    </Routes>

    {/* <div>
      <Cards characters={characters} onClose = {onClose} />
    </div> 
    <div>
      <NavBar onSearch = {onSearch}/>
    </div>  */}
  </div>
  )
}

export default App

