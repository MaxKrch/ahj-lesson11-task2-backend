const Router = require('koa-router');
const { creatingArrayComments } = require('../api/proccessingRequestComments.js');

const comments = new Router();

comments.get('/posts/:id/comments/:sort?', async ctx => {
	const response = await creatingArrayComments(ctx.params)
	ctx.response.body = response;
})

module.exports = comments;