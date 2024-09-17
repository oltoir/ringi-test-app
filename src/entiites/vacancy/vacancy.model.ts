import { request } from '@/shared/lib/axios'
import { VacancyType } from '@/entiites/vacancy'

export const postVacancy = (vacancy: VacancyType) => {
    const url = `/vacancies`

    return request.post(url, vacancy)
}
