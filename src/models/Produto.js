const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: DataTypes.STRING,
            details: DataTypes.TEXT,
            price: DataTypes.FLOAT,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        }, {
            tableName: 'products',
            timestamps: false,
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {
            foreignKey: 'owner',
            targetKey: 'id',
            as: 'proprietario'
        });
    }
}

module.exports = Produto;