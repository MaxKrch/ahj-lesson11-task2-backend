const { faker } = require('@faker-js/faker');

class Author {
	constructor () {
		this.id = faker.string.uuid() ;
		this.nick = faker.internet.userName();
		this.avatar = faker.image.avatarLegacy();
	}
}

const createAuthor = () => {
	return new Author();
}

module.exports = {
	createAuthor
}