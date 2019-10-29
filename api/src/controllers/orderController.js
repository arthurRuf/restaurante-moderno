const order = require("../models/order");
const itemMenu = require("../models/itemMenu");
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
          connection.close();
          callback(null, prepareResponse(createdOrder));
        })
        .catch(err => {
          console.log("err", err);
        });
    });
  },

  list(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    database.connect().then(connection => {
      let data = JSON.parse(event.body);

      // menu(connection).find({ company: "Pizzaria Ibiza" })
      itemMenu(connection);
      order(connection)
        .find(
          {
            ...data.filter,
          })
        .populate("itemMenu")
        .exec(function(err, orderList) {
          if (err) return console.log(err);
          connection.close();
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
          connection.close();
          callback(null, prepareResponse(orderList));
        })
        .catch(err => {
          console.log("err", err);
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
          connection.close();
          callback(null, prepareResponse(orderList));
        })
        .catch(err => {
          console.log("err", err);
        });
    });
  },


};
