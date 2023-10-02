
const router = require('express').Router();

const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

router.get("/login", login); // Define /rickandmorty/login route before the catch-all route

// Rest of the route definitions
router.get("/", (req, res) => {
    res.send('hello world desde Router');
});

// Other routes
router.get("/character/:id", getCharById);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;