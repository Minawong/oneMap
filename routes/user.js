const models = require('../models');
const CROUP_NAME = '用户';
module.exports = [
    {
        method: 'GET',
        path: '/users',
        config: {
            tags: ['api', CROUP_NAME],
            description: '用户列表'
        },
        handler: async (request, reply) => {
            const result = await models.polygons.sequelize.query("SELECT * FROM polygon WHERE public.st_intersects(shape,public.st_geomfromtext('polygon ((11853454.755134491 3405719.725838587,11853454.755134491 3404508.676671662,11848868.533437261 3404508.676671662,11848868.533437261 3405719.725838587,11853454.755134491 3405719.725838587))',3857))=true", { type:  models.polygons.sequelize.QueryTypes.SELECT})
            // const result = await models.polygons.findAll({
            //     attributes:['objectid', 'shape'],
            //     limit: 1
            // })
            reply({
                code: '5',
                response: result
            });
        }
    }
]