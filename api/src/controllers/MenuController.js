const menu = require("../models/menu");
// const User = require('../models/User');
const database = require("../infra/database");
const prepareResponse = require("../infra/prepareResponse");


module.exports = {
  //aqui pode trocar tech por categorias e filtrar por categorias
  getByCategory(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect()
      .then(connection => {
        let data = JSON.parse(event.body);


        // menu(connection).find({ categories: data.category })
        // menu(connection).find({ company: "Pizzaria Ibiza" })
        menu(connection).find({})
          .then(menu => {
            connection.close();
            callback(null, prepareResponse(menu));
          })
          .catch(err => {
            console.log("err", err);
          });

      });
  },

  //aqui pode trocar tech por categorias e filtrar por categorias
  create(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect()
      .then(connection => {
        let data = JSON.parse(event.body);


        menu(connection).create({data})
          .then(menu => {
            connection.close();
            callback(null, prepareResponse(menu));
          })
          .catch(err => {
            console.log("err", err);
          });

      });
  },

  async store(req, res) {
    const connection = await database.connect();

    const {filename} = req.file;
    const {company, name, price, categories} = req.body;
    const {user_id} = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({error: "User doesnt exists"});
    }

    const item = await Menu.create({
      user: user_id,
      thumbnail: filename,
      name,
      company,
      price,
      categories: categories.split(",").map(category => category.trim())
    });

    return res.json(item);
  }
};
