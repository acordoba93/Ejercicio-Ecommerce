module.exports = function(sequelize, dataTypes) {
    let alias = "Category";

    let cols = {
        categoria_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        }
    }
    
    let config = {
        tableName: "Categories",
        timestamps: false
    }

    let Category = sequelize.define(alias, cols, config)

   /* Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "Products",
            foreignKey: "categoria_id"
        });
    }*/

    return Category;
}