import Card from "../Card/Card";
import styles from '../Cards/StyledCards.module.css';

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.cardsContainer}>
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}
 
 
 
 
 