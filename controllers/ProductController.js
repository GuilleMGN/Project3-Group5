const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Product
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    findAll: function (req, res) {
        db.Product
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Product
            .findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        db.Product
            .findOneAndUpdate({ id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    remove: function (req, res) {
        db.Product
            .findById({ id: req.params.id })
            .then(data => data.remove(id))
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}