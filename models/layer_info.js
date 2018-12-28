module.exports = (sequelize, DataTypes) => sequelize.define(
    'layers',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        featuretype: {
            type: DataTypes.STRING,
            allowNull: false
        },
        businesstypeid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        businesstypename: {
            type: DataTypes.STRING,
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
        },
        basename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createusername: {
            type: DataTypes.STRING,
            allowNull: false
        },
        basecategory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        labelsymbol: {
            type: DataTypes.STRING,
            allowNull: true
        },
        datasourceid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        datasourcename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        datatypeid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        plugin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        params: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '{"scale":{"min":"","max":""}}'
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
        groupid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        datatypename: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        freezeTableName: true,
        timestamps: false,        
        tableName: 'tb_layer_info'
    }
)