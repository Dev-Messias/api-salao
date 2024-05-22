const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        requered: true
    },
    titulo: {
        type: String,
        riquered: true,
    },
    preco: {
        type: Number,
        riquered: true,
    },
    comissao: {
        type: Number,//% de comissao sobre o preco
        riquered: true,
    },
    duracao: {
        type: Number,//duracao em minutos do servico
        riquered: true,
    },
    recorrencia: {
        type: Number,//periodo de em que o cliente ira voltar para refazer o servico em dias
        riquered: true,
    },
    descricao: {
        type: String,
        riquered: true,
    },
    status: {
        type: String,
        enum: ['A', 'I', 'E'],// A => ativo, I => Inativo, E => excluido
        required: true,
        default: 'A' //por padrao inicia em Ativo
    },
   
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Servico', servico)