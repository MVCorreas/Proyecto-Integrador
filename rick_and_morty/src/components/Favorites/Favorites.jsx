import Card from "../Card/Card";
import { connect } from "react-redux";
import React from "react";

const Favorites = ({ myFavorites }) => {
    return (
      <div>
        <h1>My Favorites</h1>
        <div>
          {myFavorites.map((character) => (
            <Card key={character.id} id={character.id} character={character} />
          ))}
        </div>
      </div>
    );
  };

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites
    }
  };

export default connect(mapStateToProps)(Favorites);