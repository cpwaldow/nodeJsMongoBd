const router = require('express').Router();

const Person = require('../models/Person');

router.post('/', async (req, res) => {
  // tratar os dados do body - req.boby

  // Esperado do req.body: {name: "Carlos", salary: 5000, approved: false}
  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: 'O nome é obrigatório!' });
  }

  const person = {
    name,
    salary,
    approved,
  };

  // create mongoose
  try {
    // criando dados
    await Person.create(person);

    res.status(201).json({ message: 'Pessoa inserida com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
