const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(
	'mongodb+srv://omnistack:omnistack@omnistack-u2wzm.mongodb.net/restaurantemoderno?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)mongodb+srv://omnistack:omnistack@omnistack-u2wzm.mongodb.net/admin?retryWrites=true&w=majority'
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar o corpo da requisição (para criação, edição)

app.use(express.json());

app.use(routes);

app.listen(3333);
