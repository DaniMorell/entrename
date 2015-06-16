// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Entrenes',
    { titulo: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta titulo"}}
      },
      entrenamiento: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta entrenamiento"}}
      },
      fecha: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Fecha"}}
      }      
    }
  );
}