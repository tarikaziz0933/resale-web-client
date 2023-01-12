import Categories from "../../components/Categories/Categories";
import Login from "../../Pages/Home/Login/Login";
import Registration from "../../Pages/Home/Login/Registrarion";
import BlogsContainer from "../../Pages/Home/Shared/Navbar/Footer/Blogs/BlogsContainer";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/blogs",
                element: <BlogsContainer></BlogsContainer>,
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])

export default router;