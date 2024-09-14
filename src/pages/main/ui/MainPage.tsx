import Accent from '@assets/icons/accent.svg'
import MainPageImage from '@assets/icons/main-page-illustration.svg'
import { Button } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'

function MainPage() {
    const navigate = useNavigate()
    return (
        <div className="mt-16 flex min-h-screen w-full flex-col sm:mt-0 sm:justify-center">
            <div className="flex w-full justify-center">
                <div className="w-full">
                    <h1 className="text-7xl font-bold">
                        Discover
                        <br />
                        more than
                        <br />
                        <span className="text-primary">5000+ Jobs</span>
                    </h1>
                    <img src={Accent} alt="" className="mt-5 w-fit" />
                    <p className="mt-5 text-lg font-semibold text-gray-800 dark:text-gray-300">
                        Great platform for the job seeker that searching
                        <br />
                        for new career heights and passionate about startups.
                    </p>
                    <Button
                        className="mt-6 w-full sm:mt-16 sm:w-2/3"
                        variant="outline"
                        size="lg"
                        onClick={() => navigate('/jobs')}
                    >
                        Apply now!
                    </Button>
                </div>
                <img
                    src={MainPageImage}
                    alt=""
                    className="mt-5 hidden w-full sm:block"
                />
            </div>
        </div>
    )
}

export default MainPage
