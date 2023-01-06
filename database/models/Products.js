"use strict"
module.exports = function(sequelize, dataTypes) {
    const Product = sequelize.define(
        "product",
        {producto_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: dataTypes.STRING
        ,
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
        }},
        {}
    )

    /*Product.associate = function(models) {
        Product.BelongsTo(models.Sizes, {
            as: "Sizes",
            foreignKey: "talle_id"
        });
        //Product.BelongsTo(models.Categories, {
            as: "Categories",
            foreignKey: "categoria_id"
        });
    }*/
    return Product;
}
