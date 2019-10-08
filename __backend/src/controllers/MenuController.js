const Menu = require('../models/Menu');
const User = require('../models/User');

module.exports = {
	//aqui pode trocar tech por categorias e filtrar por categorias
	async index(req, res) {
		const { category } = req.query;
		const categories = await Menu.find({ categories: category });
		return res.json(categories);
	},

	async store(req, res) {
		const { filename } = req.file;
		const { company, name, price, categories } = req.body;
		const { user_id } = req.headers;

		const user = await User.findById(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User doesnt exists' });
		}

		const item = await Menu.create({
			user: user_id,
			thumbnail: filename,
			name,
			company,
			price,
			categories: categories.split(',').map(category => category.trim())
		});

		return res.json(item);
	}
};
