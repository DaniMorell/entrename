var express = require('express');
var router = express.Router();

var misentrenescontroller= require('../controllers/misentrenes_controller');
var commentController = require('../controllers/comment_controller');
var sessionController = require('../controllers/session_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Entrena Me', errors: []});
});

router.param('entreneId', misentrenescontroller.load);  // autoload :misentrenesId

// Definición de rutas de sesion
router.get('/login',  sessionController.new);     // formulario login
router.post('/login', sessionController.create);  // crear sesión
router.get('/logout', sessionController.destroy); // destruir sesión

router.get('/entrenes/entrene', misentrenescontroller.index);
router.get('/entrenes/:entreneId(\\d+)',        misentrenescontroller.show);

router.get('/entrenes/new', 				   sessionController.loginRequired, misentrenescontroller.new);
router.post('/entrenes/create',              sessionController.loginRequired, misentrenescontroller.create);
router.get('/entrenes/:entreneId(\\d+)/edit',    sessionController.loginRequired, misentrenescontroller.edit);
router.put('/entrenes/:entreneId(\\d+)',       sessionController.loginRequired, misentrenescontroller.update);
router.delete('/entrenes/:entreneId(\\d+)',     sessionController.loginRequired, misentrenescontroller.destroy);

// Definición de rutas de comentarios
router.get('/entrenes/:entreneId(\\d+)/comments/new', commentController.new);
router.post('/entrenes/:entreneId(\\d+)/comments',    commentController.create);
//router.get('/entrenes/:entreneId(\\d+)/comments/:commentId(\\d+)/publish', commentController.publish);

module.exports = router;
