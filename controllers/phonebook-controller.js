const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
	index: (req, res) => {
		const contacts = phonebook.get();
		res.render('index', { contacts });
	},
	addPhonebookPost: (req, res) => {
		const { name, number } = req.body;
		const contact = new Contact(name, number);
		phonebook.add(contact);

		res.redirect('/');
	},
	delete: (req, res) => {
		const { name } = req.query;
		phonebook.deleteContact(name);
		res.redirect('/');
	},
};
