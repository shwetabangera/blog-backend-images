const express = require("express");
const Blog = require("../models/blogSchema.js");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
// get all the blogs
const getAllBlogs = function (req, res) {
	Blog.find((err, data) => {
		try {
			if (err) {
				console.log(err);
			} else {
				res.status(200).json({
					status: "successful",
					data,
				});
			}
		} catch {
			return err;
		}
	});
};
//get blog by id
const getBlogbyId = (req, res) => {
	Blog.findOne({ id: req.params.id }, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.status(200).json({
				status: "successful",
				data,
			});
		}
	});
};
//create blog
const createBlog = async (req, res) => {
	let parameters = ["author", "title", "content"];
	let blogs = parameters.every((blog) => {
		return req.body[blog];
	});
	if (!blogs) {
		return res.status(400).json({
			status: "unsuccessful",
			message: "req body is invalid",
		});
	}
	try {
		let newBlog = await new Blog({
			author: req.body.author,
			title: req.body.title,
			content: req.body.content,
		});

		newBlog = await newBlog.save();
		res.status(200).json({
			status: "Blog created",
			data: newBlog,
		});
	} catch (err) {
		res.status(401).json({
			status: "Status Unsuccessful",
			message: "Cannot create new  blog",
		});
	}
};
// using form-data and uploading image
const middleware = (req, res, next) => {
	var imageName;
	var uploadStorage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, path.join(__dirname, "..", "images"));
		},
		filename: function (req, file, cb) {
			imageName = file.originalname;
			cb(null, imageName);
		},
	});

	var upload = multer({ storage: uploadStorage });
	var uploadFile = upload.single("image");

	uploadFile(req, res, function (err) {
		console.log(req.file);
		let newBlog = new Blog();
		console.log(req.file);
		newBlog.author = req.body.author;
		newBlog.title = req.body.title;
		newBlog.content = req.body.content;

		newBlog.img.data = req.file.path;
		newBlog.img.contentType = "images/jpeg";

		newBlog.save((err, data) => {
			try {
				if (err) {
					console.log(err);
				} else {
					res.status(200).json({
						status: "Blog created",
						data: data,
					});
				}
			} catch {
				return err;
			}
		});
	});
};

// delete blog by id
const deleteBlog = (req, res) => {
	Blog.remove({ id: req.params.id }, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.status(200).json({
				status: "successful",
				message: "Data deleted successfully",
				data,
			});
		}
	});
};
module.exports.getBlogbyId = getBlogbyId;
module.exports.getAllBlogs = getAllBlogs;
module.exports.createBlog = createBlog;
module.exports.middleware = middleware;
module.exports.deleteBlog = deleteBlog;
