//TABLA USUARIOS//
module.exports = (sequelize, dataTypes) => {
  const alias = "Usuarios";

  const cols = {
    Id: {
      type: dataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true

    },
    NonbreCompleto: {
      type: dataTypes.STRING

    },
    DNI: {
      type: dataTypes.INTEGER

    },
    Email: {
      type: dataTypes.STRING

    },
    Password: {
      type: dataTypes.INTEGER

    },
    Celular: {
      type: dataTypes.INTEGER

    },
    IdProductosCyT: {
      type: dataTypes.INTEGER,
      autoIncrement: true
      //foreignKey: true

    }
  };

  const config = {
    tableName :"users",
    timestamps : false
  };


  const users = sequelize.define(alias,cols,config);

  users.associate = function(models) {
    users.hasMany(models.product_final, {
      as: "usuario-producto",
      foreignKey: "ProductoFinal-Id"
    })
  }
  return users  
}
