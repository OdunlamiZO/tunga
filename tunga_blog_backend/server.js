const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000;

const blogSchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		author: String,
	},
	{ timestamps: true }
);
const Blog = mongoose.model("Blog", blogSchema);

function checkApiKey(req, res, next) {
	const apiKey = process.env.API_KEY;
	const providedKey = req.headers["x-api-key"];
	if (!providedKey || providedKey !== apiKey) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	next();
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", async (req, res) => {
	try {
		const blogs = await Blog.find();
		res.status(200).json(blogs);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
app.get("/:id", async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id);
		res.status(200).json(blog);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
app.post("/", checkApiKey, async (req, res) => {
	try {
		const { title, content, author } = req.body;
		const blog = new Blog({ title, content, author });
		await blog.save();
		res.status(200).json(blog);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

async function start() {
	await mongoose
		.connect(process.env.MONGO_URI, {
			autoCreate: true,
		})
		.then(() => {
			console.log("Connection to database establised");
		})
		.catch((error) => {
			console.error(error);
			process.exit(1);
		});
	app.listen(port, () => {
		console.log(`Server starting on port ${port}`);
	});
}

void start();
