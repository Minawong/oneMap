module.exports = (sequelize, DataTypes) => sequelize.define(
    'users',
    {
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loginpage: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'tb_user_info'
    }
)