const Router = require('koa-router');
const { creatingArrayPosts } = require('../api/proccessingRequestPosts.js');

const posts = new Router();

posts.get('/posts/:sort?', async ctx => {
	const response = await creatingArrayPosts(ctx.params)
	ctx.response.body = response;
})

module.exports = posts;