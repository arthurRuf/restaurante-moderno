const Spot = require('../models/Spot');
const User = require('../models/User')

module.exports = {
    async index(req,res){
        const {menus }= req.query;

        const spots = await Spot.find({menu: menus });
        return res.json(spots);
    },


    async store (req, res){
        const {filename} = req.file;
        const {nomeEmpresa, categoria, item, menu } = req.body;
        const {user_id} = req.headers;
        
        const user = await User.findById(user_id);
        if (!user){
            return res.status(400).json({error: 'usuario ta na merda'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            nomeEmpresa,
            categoria, 
            item,
            menu: menu.split(',').map(menu => menu.trim()),

        })

        return res.json({spot})
    }

};