// importa a configuração do knex do knexfile.js
var knexConfig = require('../knexfile');
// importa o knex aplicando a configuração
var knex = require('knex')(knexConfig);
var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();

// exibe o formulário de login
router.get('/login_form', async (req, res) => {
  // renderiza formulário EJS (view)
  res.render('auth/login_form', { error: req.query.error });
});

// tenta logar o owners e redirecionar para a raiz do sistema
router.post('/sign_in', async (req, res) => {
  // busca employee no banco com esse email
  const owner = await knex.table('owners').where({ email: req.body.email, is_admin: true }).first();
  if (!owner) {
    return res.redirect('/auth/login_form?error=1');
  }
  // compara a senha passada pelo formulário com a senha criptografa no banco de dados
  if ( bcrypt.compareSync(req.body.password, owner.password) ) {
    // se senha é correta, guarda o ID do owner na sessão
    // permitindo que seja utilizado em outras rotas
    req.session.logged_as = owner.id;
    // redireciona usuário para a raiz do sistema
    return res.redirect('/');
  } else {
    // caso a senha seja incorreta limpa sessão do cookie-session
    req.session = null;

    // redireciona usuário para o formulário de login novamente, com um parâmetro de erro=1
    return res.redirect('/auth/login_form?error=1');
  }
});

// desloga o owner e redireciona para o form de login
router.get('/sign_out', async (req, res) => {
  req.session = null;
  return res.redirect('/auth/login_form');

});

module.exports = router;