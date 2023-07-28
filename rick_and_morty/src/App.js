import './App.css';
import Cards from "./components/Cards.jsx";
import { Nav } from './components/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

//   const example = {
//     id: 1,
//     name: 'Rick Sanchez',
//     status: 'Alive',
//     species: 'Human',
//     gender: 'Male',
//     origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//   };
  //const Rick = example; // Define Rick as an alias for the example object

  //   function onSearch() {
  //     setCharacters([example]);
  //   }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  };

  const onClose = (id) => {
    const parsedId = parseInt(id); // Parséa el id recibido a un número
    const filteredCharacters = characters.filter((character) => character.id !== parsedId);
    // Realiza un filtro en tu estado local para obtener los personajes cuyo id sea distinto al recibido por parámetro
    // characters es tu estado local que contiene los personajes
    setCharacters(filteredCharacters); // Actualiza el estado con los personajes filtrados
  };

  return (
   <div className='App'>
     <Nav onSearch={onSearch} />
     <Cards characters={characters} />
   </div>
 );
}

export default App;