const Order = require('../models/Order');

module.exports = {
	async store(req, res) {
		const { user_id } = req.headers;
		const { menu_id } = req.params;
		const { date } = req.body;

		const order = await Order.create({
			user: user_id,
			menu: menu_id,
			date
		});

		await order
			.populate('menu')
			.populate('user')
			.execPopulate();

		return res.json(order);
	}
};
