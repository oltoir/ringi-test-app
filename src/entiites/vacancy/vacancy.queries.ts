import { useQuery } from '@tanstack/react-query'
import { getVacancy } from '@/entiites/vacancy'

export const useVacancy = (id: string) => {
    return useQuery({
        queryKey: ['vacancy', id],
        queryFn: () => getVacancy(id).then((res) => res.data),
    })
}
