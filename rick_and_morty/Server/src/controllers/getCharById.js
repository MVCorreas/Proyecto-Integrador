// const axios = require("axios");

// function getCharById(res, id) {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//       .then(response => {
//         const { id, name, gender, species, origin = origin.name, image, status } = response.data; //--> separamos solamente lo que necesitamos en el front
//         const character = { id, name, gender, species, origin, image, status }; //--> armamos la respuesta para presentar al front
        
//         res.writeHead(200, { "Content-type": "application/json" });
//         res.end(JSON.stringify(character));
//         //version simplificada de res: res.status(200).json(character);
//       })
//       .catch(error => {
//         res.writeHead(500, {'Content-type': "text/plain"});
//         res.end(error.message);
//         //version corta: res.status(500).contentType('text/plain').send(error.message);
//       });
//   }
  
  // module.exports = { getCharById };

  const axios = require('axios')
  const URL = "https://rickandmortyapi.com/api/character"
  
  //CON PROMESAS .THEN()
  // const getCharById = (req, res) => {
  //   const {id} = req.params // {id: 5}
  //  // console.log(id)
  //   axios.get(`${URL}/${id}`)
  //   .then(({data}) => {
  //     console.log(data)
  //     if (data) {
  //       const {name, gender, species, origin = origin.name, image, status } = data
  //       const character = {name, gender, species, origin, id, image, status }
  //       res.status(201).json(character) 
  //     } else {
  //       res.status(404).json({mesagge: "Not Found"}) 
  //     }
  //   })
  //   .catch(error => {
  //   //  console.log(error)
  //     res.status(500).json({message: "HOLA FALLE"})
  //     //console.log(error)
  //   })
  // }

  //CON ASYNC AWAIT
  const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const {data} = await axios.get(`${URL}/${id}`); //desestructuramos la propiedad data dentro de la respuesta que trae Axios (trae statuscode, y data)
        const {name, gender, species, origin = origin.name, image, status } = data;
        const character = {name, gender, species, origin, id, image, status };
        res.status(201).json(character);
    
    } catch (error) {
        if (error.message.includes('404')) {
            res.status(404).json({mesagge: "Character Not Found"});
        } else {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = getCharById;