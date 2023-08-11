import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterDetail } from '../../redux/actions';

export const Detail = () => {
   const {id} = useParams();
   //const [character, setCharacter] = useState({});
   const character = useSelector(state => state.characterDetail) //ahora el estado no es local, sino global. Empleo el useEffect para hacer un fecth a una action que hace peticion a la API   const dispatch = useDispatch()
   const dispatch = useDispatch();
   
   // useEffect(() => {
   //    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacter(data);
   //       } else {
   //          window.alert('No hay personajes con ese ID');
   //       }
   //    });
   //    return setCharacter({});
   // }, [id]);

   useEffect(() => {
      dispatch(getCharacterDetail(id))
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
  
  
  
  
  
  
