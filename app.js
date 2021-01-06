const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const blogRouter = require("./routes/blogRoutes");
dotenv.config({ path: "./config.env" });
const multer = require("multer");
const app = express();
app.use(express.json());
app.use("/blogs", blogRouter);
dotenv.config({
	path: `${__dirname}/config.env`,
});
mongoose.connect(
	process.env.DATABASE_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	(err, connection) => {
		if (err) {
			console.log(err);
			return console.log("Error in connecting database");
		}

		console.log("Successfully connected to database");

		app.listen(process.env.PORT, () => {
			console.log(`Server started at PORT ${process.env.PORT}`);
		});
	}
);
