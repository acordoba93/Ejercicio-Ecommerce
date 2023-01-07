module.exports = function(sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        talle_id: {
            type: dataTypes.INTEGER
        },
        categoria_id: {
            type: dataTypes.INTEGER
        },
        imagenProducto: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "Products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)
    
    Product.associate = function(models) {
        Product.belongsTo(models.Size, {
            as: "Sizes",
            foreignKey: "talle_id"
        });
        Product.belongsTo(models.Category, {
            as: "Categories",
            foreignKey: "categoria_id"
        });
    }
    return Product;
}
