const { v4: uuidv4 } = require("uuid");

function getId() {
	return uuidv4();
}

let allUsers = [
	{ id: getId(), name: "Ed Carter", bio: "hero" },
	{ id: getId(), name: "Mary Edwards", bio: "super hero" },
];

function getAllUSers() {
	return allUsers;
}

function insertUser(user) {
	user.id = getId();
	allUsers.push(user);
	return user;
}

function login(user) {
	let existUser = null;
	for (let i = 0; i < allUsers.length; i++) {
		const item = allUsers[i];
		if (item.username === user.username && item.password === user.password) {
			existUser = item;
			break;
		}
		return existUser;
	}
}

module.exports = {
	getAllUSers,
	insertUser,
	login,
};
