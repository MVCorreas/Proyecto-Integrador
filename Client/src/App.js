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
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const email = "mvcorreas@gmail.com";
  const password = "mv1220";
  const navigate = useNavigate();
  

  // Función para obtener todos los personajes
  const onSearch = async (id) => { //no es necesario req, res si no trabajamos con peticiones HTTP express
    if (isNaN(id)) {
      alert("Por favor, ingresa un número válido como ID.");
      return;
    }

    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

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
    } catch (error) {
      alert(`Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`);
  }
  };

  // Función para obtener un personaje aleatorio
  // const randomCharacter = () => {
  //   const randomId = Math.floor(Math.random() * 826) + 1;

  //   axios(`https://rickandmortyapi.com/api/character/${randomId}`)
  //     .then(({ data }) => {
  //       if (data.name) {
  //         const characterExists = characters.includes(data);

  //         if (characterExists) {
  //           alert("Este personaje ya se encuentra en la lista.");
  //         } else {
  //           setCharacters((characters) => [...characters, data]);
  //         }
  //       } else {
  //         alert(`¡No hay personajes con el ID proporcionado!`);
  //       }
  //     })
  //     .catch((error) => {
  //       alert(
  //         `Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`
  //       );
  //       console.error(error);
  //     });
  // };

  // Función para eliminar un personaje
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  // Función para validar acceso Login

  // const login = (userData) => {
  //   const inputEmail = userData.email.trim();
  //   const inputPassword = userData.password.trim();
  //   if (inputEmail === email && inputPassword === password) {
  //   setAccess(true);
  //   alert("Login Exitoso");
  //   navigate('/home');
  //   } else if (inputEmail !== email || inputPassword !== password) {
  //     alert("Los datos ingresados son inválidos");
  //   }};

  //FUNCION LOGIN CON PROMESAS
  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = 'http://localhost:3001/rickandmorty/login/';
  //   axios(URL + `?email=${email}&password=${password}`)
  //   .then(({ data }) => {
  //      const { access } = data;
  //      setAccess(data);
  //      alert("Login Exitoso");
  //      access && navigate('/home');
  //   });
  // }


  //FUNCION LOGIN ASYNC AWAIT
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      //const response = await axios.get(URL + `?email=${email}&password=${password}`); // tambien puedo usar params: 
      const response = await axios.get(URL, {params: { email, password }});
      
      
      const { access } = response.data;

      setAccess(access);
      access && navigate("/home");

      if (access) {
        // Login successful
       
        alert("Welcome!");
        navigate('/home');
      } else {
        // Login failed
        alert("Invalid credentials.");
      } 
    }  catch (error) {
      alert(`Ocurrió un error al intentar ingresar. Por favor, intenta nuevamente más tarde.`);
      console.error({ error: error.message });
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

 // Función para desloguearse del sistema
 const logout = () => {
  setAccess(false);
  // Reiniciar la página para que el usuario pueda volver a ingresar sus credenciales. y asi no queden cargadas tarjetas agregadas antes de desloguearse.
  !access && navigate("/");
  alert("¡Hasta pronto!");
  window.location.reload();
};

 let backgroundClass;
 if (location.pathname === "/" || location.pathname === "/home") {
   backgroundClass = "App";
 } else if (location.pathname === "/about") {
   backgroundClass = "AboutBackground";
 } else if (location.pathname === "/favorites") {
  backgroundClass = "FavoriteContainer";
 } else if (location.pathname.startsWith("/detail")) {
  backgroundClass = "DetailContainer";
 }

  return (
    <div className={backgroundClass}>
      {location.pathname !== "/" &&  <Nav  onLogout={logout}/>}
      {location.pathname !== "/" && location.pathname !== "/about" && location.pathname !== "/favorites" && !location.pathname.startsWith('/detail') && <SearchBar onSearch={onSearch} />}
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
