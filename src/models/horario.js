const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        requered: true
    },
    especialidades:[
        {
            type: mongoose.Types.ObjectId, //pegando o id de varios servicos
            ref: 'Servico',
            requered: true
        }
    ],
    colaboradores:[
        {
            type: mongoose.Types.ObjectId, //qual colaborador ira realizar o servico
            ref: 'Colaboradores',
            requered: true
        }
    ],
    dias: {
        type: [Number],//pegando os dias da semana, comecando pelo domingo que é 0
        required: true
    },
    inicio: {//data inicial do horario
        type: Date,
        required: true
    },
    fim: {//data final do horario
        type: Date,
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Horario', horario)