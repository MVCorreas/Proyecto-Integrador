const router = require('express').Router();

/*
const express = require('express')
const router = express.Router()
*/
router.get('/', (req, res) => {
    res.send('hello world desde Router')
})

const getCharById = require('../controllers/getCharById')
// const {deleteFav, postFav} = require('../controllers/handleFavorites')
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

// http://localhost:3001/rickandmorty/character/5 ===> 
// traer todos los personajes router.get('/character')
router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/login", postUser)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)



module.exports = router;