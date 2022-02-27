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

// rota inicial / endpoint
app.get('/', (req, res) => {
  // mostrar requisição

  res.json({ message: 'Olá, Express!' });
});

// problema com o login! MongoServerError: bad auth : Authentication failed.
const DB_USER = 'Carlos';
const DB_PASSWORD = encodeURIComponent('$8RyuHSvU$dkbhP');

// entregar uma porta
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.pi20o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
