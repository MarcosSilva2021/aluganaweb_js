var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Aluga na Web',
    owner: res.locals.owner
  });

});

module.exports = router;
