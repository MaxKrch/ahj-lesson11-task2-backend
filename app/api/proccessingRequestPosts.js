const { createPost } = require('./data/createPost.js');
const { createAuthor } = require('./data/createAuthor.js');
const { getRandomNumber } = require('./getRandomNumber.js');


const creatingArrayPosts = async ({ sort = 'latest', start = '0', count = '10' }) => {
	//В реальном проекте: Исходя из полученых даных, формирования запроса к БД
	const response = {
		success: false,
	}
	const posts = [];
	const countPosts = getRandomNumber([5, 10]);

	try {
		for (let i = 0; i < countPosts; i += 1) {
			const author = createAuthor();
			const post = createPost({author});
			posts.push(post)
		}
		response.data = posts;
		response.success = true;
	
	} catch (err) {
		console.log(`Что-то пошло не так: ${err}`);
	}

	return response;
} 

module.exports = {
	creatingArrayPosts,
}