const { faker } = require('@faker-js/faker');


class Comment {
	constructor({ author, post_id }) {
		if(!author || !post_id) {
			return;
		}
		this.author = author;
		this.post_id = post_id;
		this.id = faker.string.uuid();
		this.content = faker.lorem.lines({ min: 1, max: 3 });
		this.created = Date.now();
	}
}

const createComment = ({ author, post_id }) => {
	return new Comment({ author, post_id });
}

module.exports = {
	createComment,
}
