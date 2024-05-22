const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
    nome: {
        type: String,
        required: [true, "Nome é obrigatório"]
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "E-mail é obrigatório"]
    },
    senha: {
        type: String,
        required: [true, "Senha é obrigatório"]
    },
    foto: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'I'],
        required: true,
        default: 'A'
    },
    contaBancaria: {
        titular: {
            type: String,
            required: true,
        },
        cpfCnpj: {
            type: String,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        },
        agencia: {
            type: String,
            required: true,
        },
        numero: {
            type: String,
            required: true,
        },
        dv: {
            type: String,
            required: true,
        },

    },
    recipientId: {
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('Colaborador', colaborador)