import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNavMenu } from './MobileNavMenu'

export function Layout() {
    return (
        <div>
            <Header />
            <div className="mx-auto w-full px-4 sm:max-w-screen-lg sm:px-0 xl:max-w-screen-xl">
                <Outlet />
            </div>
            <MobileNavMenu />
            <Footer />
        </div>
    )
}
