const fs = require('fs');

const db = {
	fetchData(path) {
		const data = fs.readFileSync(path, 'utf8', (err) => {});
		return JSON.parse(data);
	},

	saveDate(data, path) {
		const jsonData = JSON.stringify(data);
		return fs.writeFile(path, jsonData, (err) => err);
	},
};

let phoneBook = db.fetchData('./db.json');

const add = (contact) => {
	phoneBook.push(contact);
	const err = db.saveDate(phoneBook, './db.json');
	console.log(err);
};

const get = () => [...phoneBook];

const deleteContact = (name) => {
	phoneBook = phoneBook.filter((contact) => contact.name !== name);
	db.saveDate(phoneBook, './db.json');
};

module.exports = {
	add,
	get,
	deleteContact,
};
