const express = require('express');
const { get } = require('http');

const itemsRoutes = require('./routes/itemsRoutes');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');

const usersRoutes = require('./routes/usersRoutes');

const app = express();

var cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
});

app.use('/api/v1/8d59e57a-6b8f-4a54-b585-2e2c3edcd3ea/register', registerRoutes);
app.use('/api/v1/8d59e57a-6b8f-4a54-b585-2e2c3edcd3ea/login', loginRoutes);
app.use('/api/v1/8d59e57a-6b8f-4a54-b585-2e2c3edcd3ea/users', usersRoutes);

app.use('/api/v1/items', itemsRoutes);

module.exports = app;
