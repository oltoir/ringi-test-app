import { VacancyForm, VacancyFormType } from '@/features'
import { useToast } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import { usePostVacancy } from '@/entiites/vacancy'

export function AddVacancyForm() {
    const { toast } = useToast()
    const navigate = useNavigate()
    const { mutate } = usePostVacancy()
    const onSubmit = (data: VacancyFormType) => {
        const { salaryRangeMin, salaryRangeMax, skills, ...rest } = data
        mutate(
            {
                ...rest,
                salaryRange: {
                    min: salaryRangeMin,
                    max: salaryRangeMax,
                },
                skills: skills.split(','),
            },
            {
                onSuccess: () => {
                    toast({
                        title: 'Success!',
                        description: 'Your vacancy is added!',
                    }),
                        navigate('/jobs')
                },
                onError: () =>
                    toast({
                        title: 'Error!',
                        description: 'There are some issues',
                        variant: 'destructive',
                    }),
            }
        )
    }

    return (
        <div className="mx-auto my-12 w-full max-w-full sm:w-1/3">
            <h2 className="mb-4 text-2xl">Add Vacancy</h2>
            <VacancyForm onSubmit={onSubmit} />
        </div>
    )
}
