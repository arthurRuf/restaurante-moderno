const Menu = require('../models/Menu');

module.exports = {
	async show(req, res) {
		const { user_id } = req.headers;

		const menu = await Menu.find({ user: user_id });

		return res.json(menu);
	}
};
