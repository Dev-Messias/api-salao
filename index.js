const express = require('express');
const app = express();
const morgan = require('morgan');

//MIDDLEWARES
app.use(morgan('dev'));

//VARIAVEIS
app.set('port', 8000);

app.listen(app.get('port'), () => {
    console.log(`API salão na porta ${app.get('port')}`)
})