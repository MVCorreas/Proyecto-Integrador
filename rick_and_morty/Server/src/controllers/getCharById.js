const axios = require("axios");

function getCharById(res, id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        const { id, name, gender, species, origin = origin.name, image, status } = response.data; //--> separamos solamente lo que necesitamos en el front
        const character = { id, name, gender, species, origin, image, status }; //--> armamos la respuesta para presentar al front
        
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(character));
        //version simplificada de res: res.status(200).json(character);
      })
      .catch(error => {
        res.writeHead(500, {'Content-type': "text/plain"});
        res.end(error.message);
        //version corta: res.status(500).contentType('text/plain').send(error.message);
      });
  }
  
  module.exports = { getCharById };