const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
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
    servicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        requered: true
    },
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        requered: true
    },
    data:{//data do agendamento
        type: Date,
        required: true,
    },
    comissao:{
        type: Number,
        required: true,
    },
    valor:{
        type: Number,
        required: true,
    },
    transactionId:{
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Agendamento', agendamento)