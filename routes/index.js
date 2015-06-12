var express = require('express');
var router = express.Router();

var misentrenescontroller= require('../controllers/misentrenes_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Entrena Me' });
});

router.get('/entrenes/entrene', misentrenescontroller.entrene);

module.exports = router;
