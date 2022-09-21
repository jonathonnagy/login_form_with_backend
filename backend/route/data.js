const router = require("express").Router();
const Data = require("../model/data")

router.get("/get-data", async (req, res) => {
	try {
		const data = await Data.find()
		res.status(200).send(data)
	} catch (error) {
		console.log(error.message)
	}
})


module.exports = router;