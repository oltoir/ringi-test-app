import { useQuery } from '@tanstack/react-query'
import {
    getVacanciesList,
    VacanciesListParams,
} from '@/widgets/vacancies-list/'

export const useVacanciesList = (params: VacanciesListParams) => {
    const { data, isLoading } = useQuery({
        queryKey: ['vacancies'],
        queryFn: () => getVacanciesList(params).then((res) => res),
    })

    return {
        vacancies: data?.data || [],
        total: data?.total,
        isLoading,
    }
}
