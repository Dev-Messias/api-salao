const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        requered: true
    },
    servicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        requered: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ColaboradorServico', colaboradorServico)