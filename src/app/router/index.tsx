import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import MainPage from "@/pages/main";


const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <MainPage />
            }
        ]
    },
];


const router = createBrowserRouter(routes);

export default router;