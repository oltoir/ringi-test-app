import { links } from '@/app/layout/links.tsx'
import { Link } from 'react-router-dom'
import { Separator } from '@/shared/ui'
import React from 'react'

export function MobileNavMenu() {
    return (
        <div className="fixed bottom-0 w-full border-t py-6 backdrop-blur-lg sm:hidden">
            <div className="flex h-full w-full items-center justify-between px-4">
                <Link to="/">Home</Link>
                {links?.map((link) => (
                    <React.Fragment key={link.name}>
                        <Separator orientation="vertical" className="h-8" />
                        <Link to={link.link}>{link.name}</Link>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
