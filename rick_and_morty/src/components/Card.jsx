//import React from "react";

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img src={image} alt='' />
      </div>
   );
}