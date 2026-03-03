import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../components/Error";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import { fetchAndCacheProjects } from "../lib/cache";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            // index route renders at exactly '/'
            {
                index: true,
                element: <Home />
            },
            {
                path: 'projects',
                element: <Projects />,
                loader: async () => {
                    return await fetchAndCacheProjects();
                }
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'admin',
                element: <AdminDashboard />
            },
        ]
    },
]);