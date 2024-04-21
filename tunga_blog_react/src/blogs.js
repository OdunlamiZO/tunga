import axios from "axios";

const url = "https://tunga-blog-backend.fly.dev";

export async function getBlog(id) {
	try {
		const response = await axios(`${url}/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export async function getBlogs() {
	try {
		const response = await axios(url);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
