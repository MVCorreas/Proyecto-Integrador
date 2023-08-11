import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Detail = () => {
   const {id} = useParams();
   const [character, setCharacter] = useState({});
   
   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   const characterDetail = () => {
      return (
         <div>
           <h2>{character.name}</h2>
           <p>Status: {character.status}</p>
           <p>Species: {character.species}</p>
           <p>Gender: {character.gender}</p>
           <p>Origin: {character.origin && character.origin.name}</p>
           <img src={character.image} alt={character.name} />
         </div>
       )
       
   };

   return (
      <div>
      <h2>Detail</h2>
      {character.name ? (
        characterDetail() 
      ) : (
        <p>No hay información disponible para ese personaje</p>
      )}
    </div>
    );
  };
  
  
  
  
  
  
