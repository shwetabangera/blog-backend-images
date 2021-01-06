const express = require("express");
const Blog = require("../models/blogSchema.js");

const {
	middleware,
	createBlog,
	getBlogbyId,
	deleteBlog,
	getAllBlogs,
} = require("../controllers/blogController.js");

const router = express.Router();
router.route("/").get(getAllBlogs);
router.route("/:id").get(getBlogbyId);
router.route("/createblog").post(createBlog);
router.route("/imgupload").post(middleware);
router.route("/:id").patch(deleteBlog);
module.exports = router;
