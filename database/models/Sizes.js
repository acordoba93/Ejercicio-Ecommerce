module.exports = function(sequelize, dataTypes) {
    let alias = "Size";

    let cols = {
        talle_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        }
    }
    
    let config = {
        tableName: "Sizes",
        timestamps: false
    }

    let Size = sequelize.define(alias, cols, config)

    /*Size.associate = function(models) {
        Size.hasMany(models.Products, {
            as: "products",
            foreignKey: "talle_id"
        });
    }*/

    return Size;
}