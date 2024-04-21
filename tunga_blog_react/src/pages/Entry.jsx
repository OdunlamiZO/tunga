import { useLoaderData } from "react-router-dom";
import { getBlogs } from "../blogs";
import Layout from "../Layout";
import Blog from "../components/Blog";

export async function loader() {
	const blogs = await getBlogs()
	return { blogs };
}

export default function Entry() {
	const { blogs } = useLoaderData();
	return (
		<Layout>
			<div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", padding: "15px 5%" }}>
				{blogs.map((blog) => (
					<Blog key={blog._id} id={blog._id} title={blog.title} author={blog.author} updated={blog.updatedAt} />
				))}
			</div>
		</Layout>
	);
}
