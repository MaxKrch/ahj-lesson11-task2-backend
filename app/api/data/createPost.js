const { faker } = require('@faker-js/faker');

class Post {
	constructor({ author }) {
		if(!author) {
			return;
		}
		this.author = author;
		this.id = faker.string.uuid();
		this.title = faker.lorem.words({ min: 3, max: 12 });
		this.image = faker.image.urlLoremFlickr({ category: 'fashion' });
		this.created = Date.now();
	}
}

const createPost = ({ author }) => {
	return new Post({ author })
}

module.exports = {
	createPost
}
