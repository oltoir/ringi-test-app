import { Logo, ModeToggle } from '@/shared/ui'
import { links } from './links'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div className="border-b px-4 py-3 sm:px-0">
            <div className="mx-auto flex max-w-screen-lg items-center justify-between xl:max-w-screen-xl">
                <Logo />
                <div className="hidden gap-8 sm:flex">
                    {links.map((link) => (
                        <Link key={link.name} to={link.link}>
                            <p className="text-md transition-all hover:text-primary">
                                {link.name}
                            </p>
                        </Link>
                    ))}
                </div>
                <ModeToggle />
            </div>
        </div>
    )
}
