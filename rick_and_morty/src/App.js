import './App.css';
import Cards from "./components/Cards.jsx";
import { Nav } from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
//import characters from './data.js';

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
    setCharacters((oldChars)=> oldChars.filter((ch)=>ch.id !== +id));
  };

  return (
   <div className='App'>
     <Nav onSearch={onSearch} />
     <Cards 
     characters={characters}
     onClose={onClose} 
     />
   </div>
 );
}

export default App;