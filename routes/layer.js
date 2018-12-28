const Joi = require('joi');
const models = require('../models');
const CROUP_NAME = 'layers';
const {env} = process;
module.exports = [
    {
        method: 'POST',
        path: `/${env.SERVICE_NAME}/${CROUP_NAME}/customerAdd`,
        config: {
            tags: ['api', CROUP_NAME],
            description: '通过excel添加图层',
            validate: {
                payload: Joi.object().keys({
                    excelName: Joi.string().required(),
                    userId: Joi.string().required(),
                    tId: Joi.string().required(),
                    layerName: Joi.string().required()
                })
            }
        },
        handler: async (request, reply) => {
            // const result = await models.polygons.sequelize.query("SELECT * FROM polygon WHERE public.st_intersects(shape,public.st_geomfromtext('polygon ((11853454.755134491 3405719.725838587,11853454.755134491 3404508.676671662,11848868.533437261 3404508.676671662,11848868.533437261 3405719.725838587,11853454.755134491 3405719.725838587))',3857))=true", { type:  models.polygons.sequelize.QueryTypes.SELECT})
            // const result = await models.polygons.findAll({
            //     attributes:['objectid', 'shape'],
            //     limit: 1
            // })
            //添加layer_info, layer_user, user_layerindex
            await models.sequelize['demo_data_center'].transaction(async (t) => {
                const result = models.layers.create(    
                    {
                        featuretype: 'point',
                        businesstypeid: 'cf044daf-ab14-9dcf-aed7-ec8988636d20',
                        businesstypename: 'test',
                        basename: '客户信息',
                        createusername: 'test',
                        basecategory: '客户',
                        labelsymbol: '{"color":"#000"}',
                        datasourceid: '9',
                        datasourcename: 'demo_data_center',
                        datatypeid: 'b6050e7f-eef2-43d7-aee3-9e3dacf6213b',
                        // plugin: 'test',
                        tableid: request.payload.tId,
                        tablename: request.payload.excelName,
                        // condition: 'test',
                        datatypename: '客户信息'
                    },
                    {transaction: t}
                ).then((layer) => {
                    return models.layer_user.create(
                        {
                            layerid: layer.id,
                            userid: request.payload.userId,
                            permission: 'RMD',
                            name: request.payload.layerName,
                            category: layer.basecategory,
                            createusername: layer.createusername,
                            businesstypeid: layer.businesstypeid,
                            featuretype: layer.featuretype,
                            symbol: '{"type":"picture-marker-symbol","url":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADbUlEQVRoQ82ZzVFbMRDH/0uGXON0YCoIqSBQAXDgeXIiriCkAuwKIBUEThmbA7iC4AriDqCDwC2TxGxmrff95Gd9rBnrwjDWk/a3+5e0WhE023fu4hUOwNgDsAtCNx3+Lv17izkm+EgPWtOSykA33MEfnIFw6jjeJeYYaoDEA4x5F4ybkrcdGfAIYB8JzVw/sPWLAxDjgR8AOoFGREOEAxi9/4wwPmN+xDZ2cEQC493CAcYsnpfFqtG+IiHX9VOZLwzgmvfAC+notTl2QhZ1GMCYbwEc6Fm/GCkoCqEAvxS0X+VnPKBHO75O8QdYh3wKq9/7bqubBUDYxzFlp7ZTMDYN4AuO6cLJ8rTTpgG8QASEfMzs4yXnvi8iIQMgp+YbZ8PcOj4hIe+UxF9CYsyIL0E4cbPLsRfjCj365Ng77xYGYPKge9/JWvo/YY7dlzuJjYz0TmPGED0ahDgkLAIyk7nE3IHwLmTi/JtA6WTfhwNoQEQaLybEARQQpyCceUYiKHmrzxEPkI0oC3sLA4fdaQrCwDdlWOYcPYBsBlkbf3EIRheUXngk09zCDP9wG7LTtEVWB8B4/8OilPIaw6XXw6x6AczwjKkGTDiApNXP+Jx6uXyCzrCN/QaEiYzc4qQQYJpEhhY72VWopPwBRnyS1n8KQ5oxrkLYjG9+IyAXOKaJz2bgDmBKKN8qHmyfyUBIq3t+1XdzHLnKyw1gzJKjnAdcI7OiVVu0bDiPYPTRIzntW9tqgBGfe5QM65NN0t0o7LR2SDHaAYznRTahrQ9CB7yIXmjrI6FL/3PAaF4qb+FtG2/xG53IzLW1/GiPgNk1JF32vmCUaCdI6HDx/4hnkUnf0vKjHWDEkhL45jb1SBWhv+bTSBnJmWFNuZsAOt4HRD5ZwVbnAmSNQhNAx/uFfLK4xMvIGgUbwH3AY8Vy+WS/6MioUX6sAmjsPGJwWT4ZgI6MZLRK+bEKsC75aMqIUKne1SMg+77vsb9aPpoyAqZIKH9YqQPEV9xs8tGWUUK53QWAjkabu089Phq7Uek1pwDQqPvX9GnNQTTWWamGWgBoDIwVb7/xz7LGJyVHaQPI8PbkS8t4maGUVqwDoAmhafxSgDHL045UFrSaiYRpMa/5NnvyzaKIgD5AFomYlHyZM/OzYN0AWtGsj5MD/AetSFVA9spYBAAAAABJRU5ErkJggg==","height":15,"width":15}',
                            labelsymbol: layer.labelsymbol
                        },
                        {transaction: t}
                    ).then((layerUser) => {
                        models.layer_user_index.removeAttribute('id');
                        return models.layer_user_index.findAll({
                            where: {
                                userid: request.payload.userId
                            }
                        }, {transaction: t}).then(userindex => {
                            let relation;
                            let relationjson;
                            if(userindex.length > 0) {
                                relation = JSON.parse(userindex[0].relationjson);
                                relation.push({id: layerUser.id, type: 'group_layer'});
                                relationjson = JSON.stringify(relation);
                                models.layer_user_index.update(
                                    {
                                        relationjson: relationjson
                                    },
                                    {
                                        where: {userid: request.payload.userId},
                                        transaction: t
                                    }
                                );
                                return layerUser;
                            } else {
                                relation = [{id: layerUser.id, type: 'group_layer'}];
                                relationjson = JSON.stringify(relation);
                                models.layer_user_index.create(
                                    {
                                        userid: request.payload.userId,
                                        relationjson: relationjson
                                    },
                                    {transaction: t}
                                );
                                return layerUser;
                            }
                        });
                    })
                })
                return result;
            }).then((res) => {
                models.layer_user_view.findAll({
                    where: {
                        id: res.id
                    }
                }).then((d) => {
                    reply({
                        success: true,
                        data: d
                    });
                })
                
            }).catch(() => {
                reply({
                    success: false,
                    data: d
                })
            })
            
            
        }
    }
]