const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController =   require('./controllers/SessionController')
const SpotController =   require('./controllers/SpotController')
const DashboardController =   require('./controllers/DashboardController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post ('/sessions', SessionController.store);


routes.post ('/spots',upload.single('thumbnail'), SpotController.store);
routes.get ('/spots', SpotController.index); 
routes.get ('/dashboard', DashboardController.show); 



/*
//req.body =  acessar o corpo da requisicao(editar e criar)
routes.post('/users', (req, res) =>{
    return res.json(req.body);
});
//req.query =  Acessar query params(filtros)
routes.get('/users', (req, res) =>{
    return res.json({idade: req.query.idade});
});
//req.params = Acessar route params(para edicao e delete)
routes.put('/users/:id', (req, res) =>{
    return res.json({id: req.params.id});
});
*/
module.exports = routes;