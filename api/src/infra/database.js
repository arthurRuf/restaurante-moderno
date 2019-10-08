const mongoose = require("mongoose");
let connection = null;

module.exports.connect = async () => {
  if (connection === null) {
    connection = await mongoose.createConnection(
      "mongodb+srv://omnistack:omnistack@omnistack-u2wzm.mongodb.net/restaurantemoderno?retryWrites=true&w=majority",
      {
        bufferMaxEntries: 0,
        bufferCommands: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  }

  return connection;
};
