const Favorite = require('../DB_connection');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        const foundCharacter = await Favorite.findByPk(id) 

       if (!foundCharacter) {
        return res.status(404).json('Personaje no encontrado');
       }
       await foundCharacter.destroy();

       const allFavs = await Favorite.findAll();
       res.status(200).json(allFavs);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = deleteFav;