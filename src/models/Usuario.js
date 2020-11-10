const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        }, {
            tableName: 'users',
            timestamps: false,
            sequelize
        });
    }

    static associate(models) {
        this.hasMany(models.Produto, {
            foreignKey: 'owner',
            as: 'produtos'
        })
    }
}

module.exports = Usuario;