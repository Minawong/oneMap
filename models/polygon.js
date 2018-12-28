module.exports = (sequelize, DataTypes) => sequelize.define(
    'polygons',
    {
        objectid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        extendjson: {
            type: DataTypes.STRING,
            allowNull: true
        },
        shape: {
            type: DataTypes.GEOMETRY,
            allowNull: false
        }
    },
    {
        tableName: 'polygon'
    }
);