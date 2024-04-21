import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog(props) {
    const date = new Date(props.updated);
    return (
        <div className="blog">
            <Link to={`${props.id}`}>
                <div style={{ display: "flex", flexDirection: "column", gap: "7.5px" }}>
                    <div style={{ fontSize: "17px" }}>{props.title}</div>
                    <div style={{ fontSize: "small", display: "flex", justifyContent: "space-between" }}>
                        <span>{props.author}</span>
                        <span>{date.toLocaleString("en-US", {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                        }).replace("at", "")}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}