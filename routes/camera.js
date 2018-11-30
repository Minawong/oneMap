//routes about camera
const CROUP_NAME = 'camera';


module.exports = [
    {
        method: 'GET',
        path: `/${CROUP_NAME}`,
        handler: (request, reply) => {
            reply('hapi')
        },
        config: {
            tags: ['api', CROUP_NAME],
            description: '摄像头列表'
        }
    },
    {
        method: 'GET',
        path: `/${CROUP_NAME}/{cameraId}`,
        handler: (request, reply) => {
            reply('hapi')
        },
        config: {
            tags: ['api', CROUP_NAME],
            description: '摄像头详细信息'
        }
    }
]