import { Logo, ModeToggle } from '@/shared'
import { links } from './links'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div className="hidden border-b py-3 sm:block">
            <div className="mx-auto flex max-w-screen-lg items-center justify-between xl:max-w-screen-xl">
                <Logo />
                <div className="flex gap-8">
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
