const menu = require('../models/menu');
const database = require('../infra/database');
const prepareResponse = require('../infra/prepareResponse');

module.exports = {
	getByCategory(event, context, callback) {
		context.callbackWaitsForEmptyEventLoop = false;
		database.connect().then(connection => {
			let data = JSON.parse(event.body);

			// menu(connection).find({ company: "Pizzaria Ibiza" })
			menu(connection)
				.find({ categories: data.category })
				.then(menuList => {
					connection.close();
					callback(null, prepareResponse(menuList));
				})
				.catch(err => {
					console.log('err', err);
				});
		});
	},

	create(event, context, callback) {
		context.callbackWaitsForEmptyEventLoop = false;
		database.connect().then(connection => {
			let data = JSON.parse(event.body);

			menu(connection)
				.create({ ...data })
				.then(menu => {
					connection.close();
					callback(null, prepareResponse(menu));
				})
				.catch(err => {
					console.log('err', err);
				});
		});
	}
};
