var models = require('../models/models.js');

// Autoload :id
exports.load = function(req, res, next, entreneId) {
  models.Entrene.find(entreneId).then(function(entrene) {
      if (entrene) {
        req.entrene = entrene;
        next();
      } else{next(new Error('No existe entreneId=' + entreneId))}
    }
  ).catch(function(error){next(error)});
};

exports.index = function(req, res){
	models.Entrene.findAll().success(function(entrene) {
		res.render('entrenes/index.ejs', {entrene: entrene});
	})	
};

// GET /quizes/:id
exports.show = function(req, res) {
  res.render('entrenes/show', { entrene: req.entrene, errors: []});
};            // req.quiz: instancia de quiz cargada con autoload

// GET /quizes/new
exports.new = function(req, res) {
  var entrene = models.Entrene.build( // crea objeto quiz 
    {titulo: "Titulo", entrenamiento: "Entrenamiento"}
  );

  res.render('entrenes/new', {entrene: entrene, errors: []});
};

// POST /quizes/create
exports.create = function(req, res) {
  var entrene = models.Entrene.build( req.body.entrene );

  entrene.save({fields: ["titulo","entrenamiento"]}).then (function(){
  	res.redirect('/entrenes/entrene');
  })

  /*entrene
  .validate()
  .then(
    function(err){
      if (err) {
        res.render('entrenes/new', {entrene: entrene, errors: err.errors});
      } else {
        entrene // save: guarda en DB campos pregunta y respuesta de quiz
        .save({fields: ["entrenamiento"]})
        .then( function(){ res.redirect('/entrenes/entrene')}) 
      }      // res.redirect: Redirección HTTP a lista de preguntas
    }
  );*/
};

// GET /entrenes/:id/edit
exports.edit = function(req, res) {
  var entrene = req.entrene;  // req.entrene: autoload de instancia de entrene

  res.render('entrenes/edit', {entrene: entrene, errors: []});
};

// PUT /quizes/:id
exports.update = function(req, res) {

  req.entrene.entrenamiento  = req.body.entrene.entrenamiento;

  req.entrene.save({fields: ["titulo", "entrenamiento"]}).then (function(){
    res.redirect('/entrenes/entrene');
  })

  /*req.entrene
  .validate()
  .then(
    function(err){
      if (err) {
        res.render('entrenes/edit', {entrene: req.entrene, errors: err.errors});
      } else {
        req.entrene     // save: guarda campos pregunta y respuesta en DB
        .save( {fields: ["entrenamiento"]})
        .then( function(){ res.redirect('/entrenes/entrene');});
      }     // Redirección HTTP a lista de preguntas (URL relativo)
    }
  );*/
};

// DELETE /quizes/:id
exports.destroy = function(req, res) {
  req.entrene.destroy().then( function() {
    res.redirect('/entrenes/entrene');
  }).catch(function(error){next(error)});
};