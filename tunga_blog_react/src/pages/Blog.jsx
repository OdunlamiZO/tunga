import { useLoaderData } from "react-router-dom";
import { getBlog } from "../blogs";
import Layout from "../Layout";
import "./Blog.css"

export async function loader({ params }) {
    const blog = await getBlog(params.id);
    return { blog };
}

export default function Blog() {
    const { blog } = useLoaderData();
    const date = new Date(blog.updatedAt);
    return (
        <Layout>
            <h1 className="title">{blog.title}</h1>
            <div style={{ marginBottom: "15px", display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span>{blog.author}</span>
                <span>{date.toLocaleString("en-US", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }).replace("at", "")}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </Layout>
    );
}