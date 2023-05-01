const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);
const multer  = require('multer');
const upload = multer({ dest: './public/images' });

router.get('/', async (req, res) => {
  const products = await knex.table('products').select();
  res.render('products/list', { products });
});

router.get('/new', async (req, res) => {
  res.render('products/new');
});

router.post('/create', upload.single('photo'), async (req, res) => {
  await knex.table('products').insert({
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price),
    photo: req.file.filename
  });
  res.redirect('/products');

});

module.exports = router;