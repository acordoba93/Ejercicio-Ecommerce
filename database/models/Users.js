module.exports = function(sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        usuario_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        nacimiento: {
            type: dataTypes.DATE
        },
        pais: {
            type: dataTypes.STRING
        },
        celular: {
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        }
    }
    
    let config = {
        tableName: "Users",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config)

    return User;
}
