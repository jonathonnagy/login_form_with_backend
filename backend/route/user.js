const router = require("express").Router();
const User = require("../model/user");

router.post("/login", async (req, res) => {
	const {username, password} = req.body

	if (!username || !password) {
		return res.status(422).json({ error: "You need to fill all inputs" });
	}

	try {
		const userExists = await User.findOne({ username });
		console.log(userExists)
		// const hashedPassword = userExists.password;
		const validPassword = userExists?.password === password;
		if (!userExists || !validPassword)
		  return res.status(422).json({ error: "Wrong username or password!" });
	
		res.status(201).json({ message: "Logged in successfully" });
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: "Somethin went wrong while logging in" });
	  }
})

module.exports = router;