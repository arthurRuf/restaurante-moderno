const product = require("../models/product");
const database = require("../infra/database");
const prepareResponse = require("../infra/prepareResponse");

module.exports = {
  async create(event, context) {

    try {
      context.callbackWaitsForEmptyEventLoop = false;
      const connection = await database.connect();

      let data = JSON.parse(event.body);

      const createdItem = await product(connection)
        .create({
          name: data.name,
          description: data.description,
          price: data.price,
          image: data.image,
        });

      if (!createdItem) {
        throw new Error("Wrong Credentials");
      }
      // connection.close();
      return prepareResponse(createdItem._doc);

    } catch (err) {
      console.log("err", err);
      return prepareResponse(err, 500);
    }
  },

  async list(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
      const connection = await database.connect();

      // let data = JSON.parse(event.body);

      const list = await product(connection)
        .find({})

      console.log("list", list);
      if (!list) {
        throw new Error(list);
      }
      // connection.close();
      return prepareResponse(list);

    } catch (err) {
      console.log("err", err);
      return prepareResponse(err, 500);
    }
  },

};
