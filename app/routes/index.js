const Router = require('koa-router');
const combineRouters = require('koa-combine-routers');

const posts = require('./posts.js');
const comments = require('./comments.js');

const router = combineRouters(
	posts,
	comments
)

module.exports = router;