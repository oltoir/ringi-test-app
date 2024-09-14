import { useQuery } from '@tanstack/react-query'
import { getVacanciesList } from '@/widgets/vacancies-list/'

export const useVacanciesList = () => {
    return useQuery({
        queryKey: ['vacancies'],
        queryFn: () => getVacanciesList().then((res) => res.data),
    })
}
