import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { About } from "./Views/About/About";
import { Detail } from "./Views/Detail/Detail";
import {Form} from "./components/Form/Form.jsx";
import Favorites  from "./components/Favorites/Favorites";
import SearchBar from "../src/components/SearchBar/SearchBar";


function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const email = "mvcorreas@gmail.com";
  const password = "mv1220";
  const navigate = useNavigate();

  // Función para obtener todos los personajes
  const onSearch = (id) => {
    if (isNaN(id)) {
      alert("Por favor, ingresa un número válido como ID.");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const characterExists = characters.some(
            (character) => character.id === data.id
          );

          if (characterExists) {
            alert("Este personaje ya se encuentra en la lista.");
          } else {
            setCharacters((characters) => [...characters, data]);
          }
        } else {
          alert(`¡No hay personajes con el ID proporcionado!`);
        }
      })
      .catch((error) => {
        alert(
          `Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`
        );
        console.error(error);
      });
  };

  // Función para obtener un personaje aleatorio
  const randomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;

    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then(({ data }) => {
        if (data.name) {
          const characterExists = characters.includes(data);

          if (characterExists) {
            alert("Este personaje ya se encuentra en la lista.");
          } else {
            setCharacters((characters) => [...characters, data]);
          }
        } else {
          alert(`¡No hay personajes con el ID proporcionado!`);
        }
      })
      .catch((error) => {
        alert(
          `Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`
        );
        console.error(error);
      });
  };

  // Función para eliminar un personaje
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(charactersFiltered);
  };

  // Función para validar acceso Login

  const login = (userData) => {
    const inputEmail = userData.email.trim();
    const inputPassword = userData.password.trim();
    if (inputEmail === email && inputPassword === password) {
    setAccess(true);
    alert("Login Exitoso");
    navigate('/home');
    } else if (inputEmail !== email || inputPassword !== password) {
      alert("Los datos ingresados son inválidos");
    }};

  useEffect(() => {
    !access && navigate('/');
 }, [access]);


  return (
    <div className={(location.pathname === "/" || location.pathname === "/home") ? "App" : ""}>
      {location.pathname !== "/" &&  <Nav />}
      {location.pathname !== "/" && location.pathname !== "/about" && <SearchBar onSearch={onSearch} onRandom={randomCharacter} />}
     <Routes>
      <Route path='/' element={<Form login={login}/>} />
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route path='/favorites' element={<Favorites/>} />
     </Routes>
    </div>
  );
}

export default App;
