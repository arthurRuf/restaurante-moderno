const user = require('../models/user');
const database = require('../infra/database');
const prepareResponse = require('../infra/prepareResponse');

module.exports = {
	create(event, context, callback) {
		context.callbackWaitsForEmptyEventLoop = false;
		database.connect().then(connection => {
			let data = JSON.parse(event.body);

			user(connection)
				.create({ ...data })
				.then(userCreated => {
					// connection.close();
					callback(null, prepareResponse(userCreated));
				})
				.catch(err => {
					console.log('err', err);
					callback(null, prepareResponse(err, 500));
				});
		});
	},

	login(event, context, callback) {
		context.callbackWaitsForEmptyEventLoop = false;
		database.connect().then(connection => {
			let data = JSON.parse(event.body);

			user(connection)
				.find({ email: data.email, password: data.password })
				.then(userFound => {
					// connection.close();
					callback(null, prepareResponse(userFound));
				})
				.catch(err => {
					console.log('err', err);
					callback(null, prepareResponse(err, 500));
				});
		});
	}
};
