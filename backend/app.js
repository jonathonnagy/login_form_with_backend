const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const userRoutes = require("./route/user.js");
app.use("/api/user", userRoutes);

const dataRoutes = require("./route/data");
app.use("/api/data", dataRoutes);

app.get("/", (req, res) => {
	console.log("Healt check completed")
	res.send('healt check')
})

module.exports = app;
