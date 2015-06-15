var models = require('../models/models.js');

exports.entrene = function(req, res){
	models.Entrene.findAll().success(function(misentrenes) {
		res.render('entrenes/entrene', {entrenamiento: misentrenes[0].entrenamiento});
	})	
};