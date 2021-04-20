const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    preço: Number
});

module.exports = mongoose.model('Produto', produtoSchema);
