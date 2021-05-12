const {authSecret} = require('../.env')     //arquivo de armazenamaento dos tokens
const bcrypt = require('bcrypt-nodejs')     //para descriptografar as senhas recuperadas do banco

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!') //caso algum dos parâmetros não estiver na requisição
        }
        
        //verifica se o email passado esta presente no banco de dados
        const user = await app.db('users')
            .where({email: req.body.email})     //verificação
            .first()                            //captura o primeiro resultado
        
        if(!user) return res.status(400).send("Usuário não encontrado")

        const isMatch = bcrypt.compareSync(req.body.password, user.password)    //faz o hash e compara com a senha do banco de dados;
        if(!isMatch) return res.status(400).send("E-mail ou Senha inválidos!")  //no caso de erro, retorna 400(autorização negada);
        console.log(isMatch)

    }
    return { signin }
}