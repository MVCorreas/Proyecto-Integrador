const {User} = require('../DB_connection');

const login = async (req, res) => {
    try {
        const { email, password } = req.query;

        if (!email || !password) {
            return res.status(400).json('Faltan datos');
        }

        const foundUser = await User.findOne({ where: { email } });

        if (!foundUser) {
            return res.status(404).json('Usuario no encontrado');
        } else {
            
            if (foundUser.password !== password) {
                return res.status(403).json('Contraseña incorrecta');
            }
        }

        return res.status(200).json({ access: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = login;
