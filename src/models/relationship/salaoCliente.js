const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        requered: true
    },
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        requered: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SalaoCliente', salaoCliente)