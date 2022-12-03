//TABLA TALLES //
module.exports = (sequelize, dataTypes) => {
  const alias = "Talles";

  const cols = {
    Id: {
      type: dataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true

    },
    Talle: {
      type: dataTypes.STRING
        
    },      
    IdProductosCategoria: {
      type: dataTypes.INTEGER,
      foreignKey: true,
      autoIncrement: true

    },     
  };

  const config = {
    tableName :"sizes",
    timestamps : false
  };


  const Talles = sequelize.define(alias,cols,config);

  sizes.associate = function (models) {
    sizes.belongsToMany(models.products, {
      as: "product_final",
      through: "product_final",
      foreignKey: "Talle-Id",
      otherKey: "ProductoCategoria-Id",
      otherKey: "Colores-Id",
      timestamps: false
    });
   }

  return sizes 
}