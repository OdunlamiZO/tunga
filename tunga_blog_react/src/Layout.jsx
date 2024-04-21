import "./Layout.css";

export default function Layout({ children }) {
    const date = new Date()
    return (
        <div id="page">
            <header>Tunga Blog</header>
            <main>{children}</main>
            <footer>&copy;{date.getFullYear()} Tunga</footer>
        </div>
    );
}