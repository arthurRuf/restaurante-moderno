const Menu = require('../models/menu');

module.exports = {
	async show(req, res) {
		const { user_id } = req.headers;

		const menu = await Menu.find({ user: user_id });

		return res.json(menu);
	}
};
