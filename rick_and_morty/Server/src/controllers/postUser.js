const {User} = require('../DB_connection');

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json('Faltan datos');
        }

        // Guardar el usuario en la base de datos utilizando findOrCreate
        const [user, created] = await User.findOrCreate({
            where: { email }, // Buscar por email
            defaults: { password }, // Si no existe, crear con la contraseña
        });

        // Si se creó un nuevo usuario, responder con 201 Created, de lo contrario, 200 OK
        const status = created ? 201 : 200;
        res.status(status).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = postUser;