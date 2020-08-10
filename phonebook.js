let phoneBook = [];

const add = (contact) => phoneBook.push(contact);

const get = () => [...phoneBook];

const deleteContact = (name) => {
	phoneBook = phoneBook.filter((contact) => contact.name !== name);
};

module.exports = {
	add,
	get,
	deleteContact,
};
