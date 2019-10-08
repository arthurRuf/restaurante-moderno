const express = require('express');
const multer = require('multer');
const uploadConfig = require('./../config/upload');

const SessionController = require('./controllers/SessionController');
const MenuController = require('./controllers/MenuController');
const ProfileController = require('./controllers/ProfileController');
const OrderController = require('./controllers/OrderController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/menu', upload.single('thumbnail'), MenuController.store);
routes.get('/menu', MenuController.index);

routes.get('/profile', ProfileController.show);

routes.post('/menu/:menu_id/orders', OrderController.store);

module.exports = routes;
