const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//VARIAVEIS
app.set('port', 8000);

//Rotas
app.use('/salao',require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
    console.log(`API salão na porta ${app.get('port')}`)
})