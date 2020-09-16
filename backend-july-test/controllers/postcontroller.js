var models = require('../models/sequelize');
module.exports = {
    async createpost(req, res) {
        try {
            if(req.file && req.file.filename){
                req.body.photoUrl = `http://localhost:3000/${req.file.filename}`;
            }
            req.body.userId = req.user.id;
            var result = await models.Post.create({ ...req.body })
            return res.json(result);
        } catch (error) {
            console.log(error)
            return res.status(400).json(error);
        }
    },
    async getallpost(req, res) {
        try {
            var results = await models.Post.findAll();
            res.json(results)
        } catch (error) {
            console.log(error)
            return res.status(400).json(error);

        }
    },
    async getonepost(req, res) {
        try {
            var result = await models.Post.findOne({ where: { id: req.params.id } })
            res.json(result)
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)

        }
    },
    async updatepost(req, res) {
        try {
            req.body.userId = req.user.id;
            var result = await models.Post.update(
                { ...req.body },
                { where: { id: req.params.id } }
            )
            res.json(result)
            console.log(result)
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)

        }
    },
    async deletepost(req, res) {
        try {
            var result = await models.Post.destroy({ where: { id: req.params.id } })
            res.json(result)
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)

        }
    },
    async getUserPost(req, res) {
        try {
            console.log(req.user.id);
            var result = await models.Post.findAll({ where: { userId: req.user.id } });
            return res.json(result)
        } catch (error) {
            res.status(400).json(error);
        }

    }
}