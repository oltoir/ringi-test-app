import Accent from '@assets/icons/accent.svg'
import MainPageImage from '@assets/icons/main-page-illustration.svg'

function MainPage() {
    return (
        <div className="flex min-h-screen w-full flex-col sm:justify-center">
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
