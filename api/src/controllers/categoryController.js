const category = require('../models/category');
const database = require('../infra/database');
const prepareResponse = require('../infra/prepareResponse');

module.exports = {
	create(event, context, callback) {
		context.callbackWaitsForEmptyEventLoop = false;
		database.connect().then(connection => {
			let data = JSON.parse(event.body);

			category(connection)
				.create({ ...data })
				.then(categoryCreated => {
					connection.close();
					callback(null, prepareResponse(categoryCreated));
				})
				.catch(err => {
					console.log('err', err);
				});
		});
	}
};
