const product = require('../models/product');
const database = require('../infra/database');
const prepareResponse = require('../infra/prepareResponse');

module.exports = {
	create(event, context, callback) {
		context.callbackWaitsForEmptyEventLoop = false;
		database.connect().then(connection => {
			let data = JSON.parse(event.body);

			product(connection)
				.create({ ...data })
				.then(createdWaiter => {
					connection.close();
					callback(null, prepareResponse(createdWaiter));
				})
				.catch(err => {
					console.log('err', err);
					callback(null, prepareResponse(err, 500));
				});
		});
	},

	list(event, context, callback) {
		context.callbackWaitsForEmptyEventLoop = false;
		database.connect().then(connection => {
			let data = JSON.parse(event.body);

			product(connection)
				.find({ })
				.then(waiterList => {
					connection.close();
					callback(null, prepareResponse(waiterList));
				})
				.catch(err => {
					console.log('err', err);
					callback(null, prepareResponse(err, 500));
				});
		});
	},

};
