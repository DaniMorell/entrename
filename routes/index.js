var express = require('express');
var router = express.Router();

var misentrenescontroller= require('../controllers/misentrenes_controller');
var commentController = require('../controllers/comment_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Entrena Me', errors: []});
});

router.param('entreneId', misentrenescontroller.load);  // autoload :misentrenesId

router.get('/entrenes/entrene', misentrenescontroller.index);
router.get('/entrenes/:entreneId(\\d+)',        misentrenescontroller.show);

router.get('/entrenes/new', 				   misentrenescontroller.new);
router.post('/entrenes/create',              misentrenescontroller.create);
router.get('/entrenes/:entreneId(\\d+)/edit',    misentrenescontroller.edit);
router.put('/entrenes/:entreneId(\\d+)',       misentrenescontroller.update);
router.delete('/entrenes/:entreneId(\\d+)',     misentrenescontroller.destroy);

// Definición de rutas de comentarios
router.get('/entrenes/:entreneId(\\d+)/comments/new', commentController.new);
router.post('/entrenes/:entreneId(\\d+)/comments',    commentController.create);
//router.get('/entrenes/:entreneId(\\d+)/comments/:commentId(\\d+)/publish', commentController.publish);

module.exports = router;
