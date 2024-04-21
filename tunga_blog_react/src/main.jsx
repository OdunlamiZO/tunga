import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Entry, { loader as entryLoader } from './pages/Entry'
import Blog, { loader as blogLoader } from './pages/Blog'
import ErrorPage from './pages/error-page'
import './index.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Entry />,
		loader: entryLoader,
	},
	{
		path: "/:id",
		element: <Blog />,
		errorElement: <ErrorPage />,
		loader: blogLoader
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
