const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'GET request para /produtos'
    })
});


router.get('/:produtoId', (req, res) => {
    const id = req.params.produtoId;
    if (id === 'unidesc') {
        res.status(200).json({
            message: 'Produto encontrado',
            id: id
        })

    } else {
        res.status(400).json({
            message: 'PRODUTO não encontrado'
        })
    }

});

router.post('/', (req, res) => {

    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        preco: req.body.preco
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

        
    })

    router.put('/', (req, res) => {
        res.status(200).json({
            message: 'PUT request para /produtos'
        })
    });
    

    
    router.put('/:produtoId', (req, res) => {
        const id = req.params.produtoId;
        if (id === 'unidesc') {
            res.status(200).json({
                message: 'Produto encontrado',
                id: id
            })
    
        } else {
            res.status(400).json({
                message: 'PRODUTO não encontrado'
            })
        }
    
    });

    router.delete("/:id", async (req, res) => {
        
        
        const id = req.params;
       
      
        const produto = await Produto.findById(id);
      
        if (produto) {
            
            
          throw new Error("Produto não encontrado");
            
        }
      
       produto.nome = req.body.nome;
       produto.preco = req.body.preco;
      
        await produto.remover();
      
        res.status(200).json({
          message: "Produto foi removido",
        });
      });





module.exports = router;
