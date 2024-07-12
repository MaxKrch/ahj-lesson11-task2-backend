const Koa = require('koa');
const cors = require('@koa/cors');
const { koaBody } = require('koa-body');

const router = require('../routes/index.js');

const server = new Koa();

server
	.use(cors())
	.use(koaBody({
		text: true,
		urlencoded: true,
		multipart: true,
		json: true,
	}))

server
	.use(router())

const port = process.env.PORT || 7070;
server
	.listen(port)