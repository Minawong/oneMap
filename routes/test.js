const Joi = require('joi');
const CROUP_NAME = 'test';

module.exports = [
    {
        method: 'POST',
        path: `/${CROUP_NAME}/{orderId}/pay`,
        handler: (request, reply) => {
            reply('hapi')
        },
        config: {
            tags: ['api', CROUP_NAME],
            description: '摄像头添加',
            validate: {
                // 入参校验
                params: {
                    orderId: Joi.number().required()
                },
                // paylod: {
                //     goodsList: Joi.array().items(
                //         Joi.object().keys({
                //             goods_id: Joi.number().integer(),
                //             count: Joi.number().integer()
                //         })
                //     )
                // },
                // query: {
                //     limit: Joi.number().integer().min(1).default(10).description('每页条目数'),
                //     page: Joi.number().integer().min(1).default(1).description('页码数')
                // },
                //
                headers: Joi.object({
                    authorization: Joi.string().required()
                }).unknown()
            }
        }
    }
]