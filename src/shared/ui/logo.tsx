import { useNavigate } from 'react-router-dom'

export function Logo() {
    const navigate = useNavigate()
    return (
        <h2
            className="cursor-pointer text-2xl font-semibold tracking-tight"
            onClick={() => navigate('/')}
        >
            Recruitment
        </h2>
    )
}
