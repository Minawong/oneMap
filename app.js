//app.js
require('env2')('./.env');
const Hapi = require('hapi');
const config = require('./config');
const routeCamera = require('./routes/camera');
const routeTest = require('./routes/test');
//swagger配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const server = new Hapi.Server();

server.connection({
	port: config.port,
	host: config.host
});

const init = async () => {
	await server.register([
		...pluginHapiSwagger
	]);
	server.route([
		...routeCamera,
		...routeTest
	]);
	 //启动服务
	 await server.start();
	 console.log(`Server running at: ${server.info.uri}`);
};

init();
 
