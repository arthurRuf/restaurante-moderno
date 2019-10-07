/*index: retorna listagemd de sessoes
show: listar uma unica sessao, 
store: criar uma sessao , update: alterar, 
destroy: deletar
*/

const User = require ('../models/User');

module.exports = {
async store(req, res){
//chaves nome da variavel = desestruturacao, email de dentro da variaviel
//adicionar uma constante e pegar o body, add o nome da cosntante no Userschema no ./Users
const { email } =  req.body;
//const nome = req.body.nome;
//Let user quer dizer que pode ser altrada
let user = await User.findOne({email});
if (!user){
    user = await User.create({ email});
}



// forcar criacao = const user = await User.create({ nome, email});

return res.json(user);
}

};