// Importando as dependencias 
const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// Iniciando o App
const app = express() 
app.use(express.json())
app.use(cors())

// Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })
requireDir('./src/models'); // faz o require automaticamente em todos os arquivos do diretório models 

// Rotas
app.use('/api', require('./src/routes'))

// Saída da Aplicação
app.listen(3001) 