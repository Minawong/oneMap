module.exports = (sequelize, DataTypes) => sequelize.define(
    'layer_user_index',
    {
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        relationjson: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createtime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        lastmodifytime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        tableName: 'tb_user_layerindex'
    }
)
