import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Post from "../pages/Post";
import Blog from "../pages/Blog";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Blog />,
      },
      {
        path: "/post/:id",
        element: <Post />
      }
    ]
  },
]);

export default function AppRoutes(){
  return (
    <RouterProvider router={router} />
  )
}