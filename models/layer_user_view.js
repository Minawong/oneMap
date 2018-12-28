module.exports = (sequelize, DataTypes) => sequelize.define(
    'layer_user_view',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        layerid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        userid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permission: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createusername: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastmodifytime: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        featuretype: {
            type: DataTypes.STRING,
            allowNull: false
        },
        params: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '{"scale":{"min":"","max":""}}'
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        plugin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        labelsymbol: {
            type: DataTypes.STRING,
            allowNull: true
        },
        layerindex: {
            type: DataTypes.STRING,
            allowNull: true
        },
        layergroupid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        groupid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        businesstypeid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createusername: {
            type: DataTypes.STRING,
            allowNull: false
        },
        labelsymbol: {
            type: DataTypes.STRING,
            allowNull: true
        },
        datatypeid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        plugin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tableid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tablename: {
            type: DataTypes.STRING,
            allowNull: true
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: true
        },
        datatypename: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName: 'tb_layer_user_view'
    }
)