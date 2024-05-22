const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
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
    documento: {
        tipo: {
            type: String,
            enum: ['individual', 'corporation'], //so vai aceitar ou cpf ou cnpj
            required: true
        },
        numero:{
            type: String,
            required: true
        }
    },
    endereco:{
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('Cliente', cliente)