// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Entrenes',
    { entrenamiento: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Entrene"}}
      }
    }
  );
}