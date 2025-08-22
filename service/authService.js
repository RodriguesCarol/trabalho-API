const { users } = require('../model/User');

function authenticate(username, password) {
	const user = users.find(u => u.username === username && u.password === password);
	return !!user;
}

module.exports = { authenticate };
