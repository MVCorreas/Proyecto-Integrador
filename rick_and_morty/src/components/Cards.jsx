import Card from "./Card";

export default function Cards({ characters }) {
   const onClose = () => window.alert("emulamos que se cierra la card");
   return (
   <div>
      {characters.map(({ name, species, gender, image })=>{
        return (
         <Card 
           name={name}
           species={species}
           gender={gender}
           image={image}
           onClose={onClose}

           />
        );
    })} 
    </div>
   );
}
 
 
 
 
 
 
