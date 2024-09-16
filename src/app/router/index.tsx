import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import MainPage from '@/pages/main'
import JobsPage from '@/pages/jobs'
import AddVacancyPage from '@/pages/add-vacancy'

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
            {
                path: 'add-vacancy',
                element: <AddVacancyPage />,
            },
        ],
    },
]

const router = createBrowserRouter(routes)

export default router
