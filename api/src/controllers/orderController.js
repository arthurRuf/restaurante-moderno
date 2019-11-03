const order = require("../models/order");
const product = require("../models/product");
const database = require("../infra/database");
const prepareResponse = require("../infra/prepareResponse");

module.exports = {
  create(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect().then(connection => {
      let data = JSON.parse(event.body);

      order(connection)
        .create({...data})
        .then(createdOrder => {
          // connection.close();
          callback(null, prepareResponse(createdOrder));
        })
        .catch(err => {
          console.log("err", err);
          callback(null, prepareResponse(err, 500));
        });
    });
  },

  list(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect().then(connection => {
      let data = JSON.parse(event.body);

      // menu(connection).find({ company: "Pizzaria Ibiza" })
      product(connection);
      order(connection)
        .find(
          {
            ...data.filter,
          })
        .populate("productList")
        .exec(function(err, orderList) {
          if (err) {
            console.log(err);
            callback(null, prepareResponse(err, 500));
          }
          // connection.close();
          callback(null, prepareResponse(orderList));
          // prints "The author is Ian Fleming"
        });
    });
  },

  update(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect().then(connection => {
      let data = JSON.parse(event.body);

      // menu(connection).find({ company: "Pizzaria Ibiza" })
      order(connection)
        .update(
          {_id: data.id},
          {$set: {...data.uptade}},
        )
        .then(orderList => {
          // connection.close();
          callback(null, prepareResponse(orderList));
        })
        .catch(err => {
          console.log("err", err);
          callback(null, prepareResponse(err, 500));
        });
    });
  },


  attend(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect().then(connection => {
      let data = JSON.parse(event.body);

      // menu(connection).find({ company: "Pizzaria Ibiza" })
      order(connection)
        .update(
          {_id: data.id},
          {$set: {status: "attended"}},
        )
        .then(orderList => {
          // connection.close();
          callback(null, prepareResponse(orderList));
        })
        .catch(err => {
          console.log("err", err);
          callback(null, prepareResponse(err, 500));
        });
    });
  },


};
