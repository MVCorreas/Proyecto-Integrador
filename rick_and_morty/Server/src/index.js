const http = require("http");
const characters = require('../src/utils/data'); 

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const {url} = req;

    if (url.includes("/rickandmorty/character/")) {
        const idMatch = url.match(/\/rickandmorty\/character\/(\d+)/); //obtener el id usando regex - (\d+) es un grupo capturado en la expresión regular. \d representa un dígito y + indica que puede haber uno o más dígitos consecutivos. Esto captura el número que sigue a "/rickandmorty/character/" en la URL.
  
         if (idMatch) {
             const id = idMatch[1]; // El primer grupo capturado por la expresión regular
             const character = characters.find(char => char.id === parseInt(id));
        
        if (character) {
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { "Content-type": "text/plain" });
            res.end("Character not found");
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
