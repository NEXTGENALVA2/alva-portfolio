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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>,
                loader: async () => {
                    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
                    const res = await fetch(`${apiBase}/projects`);
                    const raw = await res.json();
                    // convert to shape the page expects
                    return raw.map(p => ({
                        title: p.title,
                        description: p.description,
                        image: p.imageUrl,
                        tags: [],
                        liveLink: p.liveSite,
                        githubLink: p.code
                    }));
                }
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/admin',
                element: <AdminDashboard />
            },
        ]
    },
]);