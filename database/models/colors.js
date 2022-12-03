//TABLA COLORES //
module.exports = (sequelize, dataTypes) => {
  const alias = "colores";

  const cols = {
    Id: {
      type: dataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true

    },
    coloresPrimarios: {
      type: dataTypes.STRING
        
    },
    coloresSecundarios: {
      type: dataTypes.STRING
        
    },
    IdProductosCategoria: {
      type: dataTypes.INTEGER,
      foreignKey: true,
      autoIncrement: true

    },     
  };

  const config = {
    tableName :"colors",
    timestamps : false
  };


  const colors = sequelize.define(alias,cols,config);

  colors.associate = function (models) {
    colors.belongsToMany(models.Producto, {
      as: "product_final",
      through: "product_final",
      foreignKey: "Colores-Id",
      otherKey: "ProductoCategoria-Id",
      otherKey: "Talle-Id",
      timestamps: false
    });
   }
  return colors 
}