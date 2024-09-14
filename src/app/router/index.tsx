import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import MainPage from '@/pages/main'
import JobsPage from '@/pages/jobs'

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <MainPage />,
            },
            {
                path: 'jobs',
                element: <JobsPage />,
            },
        ],
    },
]

const router = createBrowserRouter(routes)

export default router
