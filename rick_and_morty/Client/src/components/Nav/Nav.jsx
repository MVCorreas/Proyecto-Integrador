//import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom'
import styles from './StyledNav.module.css';

export default function Nav({ onSearch, onRandom }) {

  return (
   
    <div className={styles.StyledContainer}> 
      <Link to='/about'>
        <div> 
          <button className={styles.NavButton}>About</button>
        </div>
      </Link>
      <Link to='/home'>
        <div > 
          <button className={styles.NavButton}>Home</button>
        </div>
      </Link>
      <Link to='/favorites'>
        <div > 
          <button className={styles.NavButton}>Favorites</button>
        </div>
      </Link>
    </div>
  
  );
}