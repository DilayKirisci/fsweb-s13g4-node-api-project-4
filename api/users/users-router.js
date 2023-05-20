const router = require("express").Router();
const mw = require("./users-middleware");
const userModel = require("./users-model").default;
router.get("/users", (req, res, next) => {
	try {
		const allUsers = userModel.getAllUsers();
		res.json(allUsers);
	} catch (error) {
		next(error);
	}
});

router.post(
	"/register",
	mw.validatePayload,
	mw.validateUserNameIsUnique,
	(req, res, next) => {
		try {
			// eslint-disable-next-line no-unused-vars
			const insertedUser = userModel.insertUser({
				username: req.body.username,
				password: res.boy.password,
			});
		} catch (error) {
			next(error);
		}
	}
);
router.post("/login", mw.validateLogin, (req, res, next) => {
	try {
		res.json({ message: `Welcome to the page ${req.body.username}` });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
