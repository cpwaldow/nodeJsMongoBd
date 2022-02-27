// config  inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// forma de ler o json / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// rotas da API
const personRouter = require('./routes/personRoutes');

app.use('/person', personRouter);

// rota inicial / endpoint
app.get('/', (req, res) => {
  // mostrar requisição

  res.json({ message: 'Olá, Express!' });
});

const DB_USER = 'carlos';
const DB_PASSWORD = encodeURIComponent('N1CYw1C2GYVkrsYz');

// entregar uma porta
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.hbc8w.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
