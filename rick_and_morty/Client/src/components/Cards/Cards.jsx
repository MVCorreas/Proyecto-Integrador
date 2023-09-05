import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}
 
 
 
 
 