import { useVacanciesList } from '@/widgets/vacancies-list'
import { VacancyCard } from '@/entiites/vacancy'

export function VacanciesList() {
    const { data } = useVacanciesList()
    return (
        <div className="flex flex-wrap gap-5">
            {data?.map((vacancy) => (
                <VacancyCard vacancy={vacancy} key={vacancy.id} />
            ))}
        </div>
    )
}
