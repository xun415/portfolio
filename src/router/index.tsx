import { useRoutes } from 'react-router-dom'
import Layout from "../components/layout";
import IndexPage from "../pages/index";
import AboutPage from "../pages/about";
import ProjectsPage from "../pages/projects";

const Routes = () => {
    return useRoutes([
        {
            element: <Layout />,
            children: [
                { path: '/', element: <IndexPage /> },
                { path: '/about', element: <AboutPage />},
                { path: '/projects', element: <ProjectsPage />},
            ]
        }
    ])
}

export default Routes