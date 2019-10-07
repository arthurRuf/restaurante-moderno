const express = require ('express');
const mongoose  = require ('mongoose');

const routes = require('./routes'); //importando as rotas

const app =express();

mongoose.connect('mongodb://deyvid:260998@cluster0-shard-00-00-zfgr0.mongodb.net:27017,cluster0-shard-00-01-zfgr0.mongodb.net:27017,cluster0-shard-00-02-zfgr0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//get: buscar info
//post: criar algo no back
//put: edit

app.use(express.json());
app.use(routes);

app.listen(3333);