const express = require('express');
const { prependOnceListener } = require('../app');
const router = express.Router();
const Produto = require('../models/produtos');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    Produto.find()
        .exec()
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(error => {
            res.status(500).json({
                erro: err
            })
        });


});

router.get('/produtoid', (req, res) => {
    const id = req.params.produto.id;
    if (id === 'unidesc') {
        res.status(200).json({
            message: 'produto encontrado',
            id: id
        });

    } else {
        res.status(400).json({
            message: 'produto não encontrao'
        })
    }


});


router.post('/', (req, res, next) => {

    const produto = new produto({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        preço: req.body.preço

    });

    produto.save()
        .then(result => {

            res.status(201).json({
                message: 'POST Request para/produtos',
                produto: produto
            });

        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });


});


module.exports = router;
