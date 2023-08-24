import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterDetail, cleanDetail } from '../../redux/actions';
import styles from '../Detail/StyledDetail.module.css';



export const Detail = () => {
   const {id} = useParams(); //nos da el id del character
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

      return () => {
        dispatch(cleanDetail())
      }
   }, [id]);

   const characterDetail = () => {
    return (
      <div className={styles.CardContainer}> 
        <h2 className={styles.Title}>{character.name}</h2>
        <p>ID: {character.id}</p>
        <p className={styles.Label}>Status: {character.status}</p>
        <p className={styles.Label}>Species: {character.species}</p>
        <p className={styles.Label}>Gender: {character.gender}</p>
        <p className={styles.Label}>Origin: {character.origin && character.origin.name}</p>
        <img className={styles.Image} src={character.image} alt={character.name} />
      </div>
    );
  };

  return (
    <div>
      <h1 className={styles.MainTitle}>Detail</h1>
      {character.name ? (
        characterDetail()
      ) : (
        <p>No hay información disponible para ese personaje</p>
      )}
    </div>
  );
  };
  
  
  
  
  
  
