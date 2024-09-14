import { useVacanciesList } from '@/widgets/vacancies-list'
import { VacancyCard } from '@/entiites/vacancy'
import { useState } from 'react'

export function VacanciesList() {
    const [page] = useState<number>(1)
    const perPage = 10
    const { vacancies } = useVacanciesList({ page, perPage })

    return (
        <div className="flex flex-wrap gap-5">
            {vacancies?.map((vacancy) => (
                <VacancyCard vacancy={vacancy} key={vacancy.id} />
            ))}
        </div>
    )
}
