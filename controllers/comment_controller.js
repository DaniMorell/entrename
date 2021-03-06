var models = require('../models/models.js');

// Autoload :id de comentarios
/*exports.load = function(req, res, next, commentId) {
  models.Comment.find(commentId).then(function(comment) {
      if (comment) {
        req.comment = comment;
        next();
      } else{next(new Error('No existe commentId=' + commentId))}
    }
  ).catch(function(error){next(error)});
};*/


// GET /quizes/:quizId/comments/new
exports.new = function(req, res) {
  res.render('comments/new.ejs', {entreneId: req.params.entreneId, errors: []});
};

// POST /quizes/:quizId/comments
exports.create = function(req, res) {
  var comment = models.Comment.build(
      { texto: req.body.comment.texto,          
        EntreneId: req.params.entreneId
        });

  comment.save()
    .then( function(){ res.redirect('/entrenes/'+req.params.entreneId);} )
    .catch(function(error){next(error)});

  /*comment
  .validate()
  .then(
    function(err){
      if (err) {
        res.render('comments/new.ejs', {comment: comment, entreneId: req.params.entreneId, errors: err.errors});
      } else {
        comment // save: guarda en DB campo texto de comment
        .save()
        .then( function(){ res.redirect('/entrenes/'+req.params.entreneId)}) 
      }      // res.redirect: Redirección HTTP a lista de preguntas
    }
  ).catch(function(error){next(error)});*/
  
};

// GET /quizes/:quizId/comments/:commentId/publish
/*exports.publish = function(req, res) {
  req.comment.publicado = true;

  req.comment.save( {fields: ["publicado"]})
    .then( function(){ res.redirect('/entrenes/'+req.params.entreneId);} )
    .catch(function(error){next(error)});

};*/