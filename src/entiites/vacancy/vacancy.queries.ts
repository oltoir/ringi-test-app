import { useMutation } from '@tanstack/react-query'
import { VacancyType } from '@/entiites/vacancy'
import { postVacancy } from '@/entiites/vacancy/vacancy.model.ts'

export const usePostVacancy = () => {
    return useMutation({
        mutationFn: (vacancy: VacancyType) => postVacancy(vacancy),
    })
}
