import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@assets/css/main.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import { ThemeProvider } from '@/shared/index.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
)
