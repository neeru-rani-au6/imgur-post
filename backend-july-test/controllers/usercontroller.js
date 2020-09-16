var models = require('../models/sequelize');
var bcrypt = require('bcryptjs')
var { createToken } = require('../middleware/authentication');
module.exports = {
    async userRegister(req, res) {
        try {
            if (!req.body.name) {
                return res.status(400).json({ error: "Name cannot be empty" });
            }
            if (!req.body.email) {
                return res.status(400).json({ error: "Email cannot be empty" });
            }
            if (!req.body.password) {
                return res.status(400).json({ error: "Password cannot be empty" });
            }
            req.body.password = await bcrypt.hash(req.body.password, 10);
            await models.User.create({ ...req.body });
            return res.json({ success: true, message: 'user register successfully' });

        } catch (err) {
            console.log(err)
            if (err.name === "SequelizeValidationError") {
                return res.status(400).send(`Validation Error: ${err.message}`)
            }
            if (err.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ error: err.errors[0].message })
            }
            return res.status(400).json(err);
        }

    },
    async userLogin(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            if (!email) {
                return res.status(400).json({ error: "email can not be null" })
            }
            if (!password) {
                return res.status(400).json({ error: "password can not be null" })
            }
            const user = await models.User.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({ error: "User does not exists" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(404).json({ error: "Invalid Password" });
            }
            var token = await createToken(user);
            res.cookie('token', token);
            return res.json({
                name: user.name,
                email: user.email,
                id: user.id,
                token:token
            });
        } catch (error) {
            console.log(error);
            return res.status(404).json(error);
        }
    },
    async userLogout(req, res) {
        try {
            res.cookie('token', { expires: Date.now() });
            return res.json({ message: "logged out" })
        } catch (error) {
            console.log(error)
            return res.status(404).json(error);

        }
    }

}