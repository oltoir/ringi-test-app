import { Button, Input, Logo } from '@/shared/ui'

export function Footer() {
    return (
        <div className="border-t py-6">
            <div className="mx-auto max-w-screen-lg flex-col items-center justify-between px-4 sm:flex-row sm:px-0 xl:max-w-screen-xl">
                <div>
                    <Logo />
                    <p className="text-md mt-4">
                        Great platform for the job seeker that
                        <br />
                        passionate about startups. Find your dream job easier.
                    </p>
                </div>
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-2xl">Get job notifications</h2>
                    <p className="text-md mt-4">
                        The latest job news, articles, sent to your inbox
                        weekly.
                    </p>
                    <div className="mt-4 flex w-full justify-between gap-4">
                        <Input type="email" placeholder="Email" />
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
