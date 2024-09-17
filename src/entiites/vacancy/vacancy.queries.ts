import { useMutation, useQuery } from '@tanstack/react-query'
import { getVacancy, VacancyType } from '@/entiites/vacancy'
import { postVacancy } from '@/entiites/vacancy/vacancy.model.ts'

export const useVacancy = (id: string) => {
    return useQuery({
        queryKey: ['vacancy', id],
        queryFn: () => getVacancy(id).then((res) => res.data),
    })
}

export const usePostVacancy = () => {
    return useMutation({
        mutationFn: (vacancy: VacancyType) => postVacancy(vacancy),
    })
}
