//TABLA CATEGORIAS//
module.exports = (sequelize, dataTypes) => {
  const alias = "categorias";

  const cols = {
    Id: {
      type: dataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true

    },
    Diciplina: {
      type: dataTypes.STRING

    },
    
         
  };

  const config = {
    tableName :"categories",
    timestamps : false
  };

  
   const categories = sequelize.define(alias,cols,config);
   
   categories.associate = function (models) {
    categories.belongsToMany(models.Products, {
      as: "product_category",
      through: "product_category",
      foreignKey: "Categorias-Id",
      otherKey: "Productos-Id",
      timestamps: false
    });
   }

  return categories 
}