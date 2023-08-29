const http = require("http"); //ahora empleamos CommonJS por eso no usamos import/export de ES6. http es nativo de CommonJS
const characters = require('../src/utils/data'); 

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //el asterico permite acceso a todos, si no dberíamos indicar ahí la dirección del cliente que aceptaré
    
    const {url} = req;

    if (url.includes("/rickandmorty/character/")) {
        const idMatch = url.match(/\/rickandmorty\/character\/(\d+)/); //obtener el id usando regex - (\d+) es un grupo capturado en la expresión regular. \d representa un dígito y + indica que puede haber uno o más dígitos consecutivos. Esto captura el número que sigue a "/rickandmorty/character/" en la URL.
  
         if (idMatch) {
             const id = idMatch[1]; // El primer grupo capturado por la expresión regular
             const character = characters.find(char => char.id === parseInt(id)); //find() devuelve el primero que encuentra
        
        if (character) {
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(character));
        } else {
            res.writeHead(400, { "Content-type": "application/json" });
            res.end(JSON.stringify({error: "Character not found"})); //es buena práctica responder con tipos de datos iguales y no plain text
        }
    } else if (url === "/rickandmorty/character") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(characters));
    } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end("Not found");
    }
}})
.listen(3001, "localhost");
