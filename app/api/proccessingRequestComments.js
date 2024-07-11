const { createComment } = require('./data/createComment.js');
const { createAuthor } = require('./data/createAuthor.js');
const { getRandomNumber } = require('./getRandomNumber.js');


const creatingArrayComments = async ({ id, sort = 'latest', start = '0', count = '10' }) => {
	//В реальном проекте: Исходя из полученых даных, формирования запроса к БД
	const response = {
		success: false,
	}
	const comments = [];
	const countComments = getRandomNumber([0, 5]);

	try {
		for(let i = 0; i < countComments; i += 1) {
			const author = createAuthor();
			const comment = createComment({ post_id: id, author });
			comments.push(comment);
		}
		response.data = comments;
		response.success = true;

	} catch (err) {
		console.log(`Что-то пошло не так: ${err}`);
	}
	
	return response;
} 

module.exports = {
	creatingArrayComments,
}