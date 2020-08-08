const phoneBook = [];

const add = (contact) => phoneBook.push(contact);

const get = () => [...phoneBook];

module.exports = {
	add,
	get,
};
