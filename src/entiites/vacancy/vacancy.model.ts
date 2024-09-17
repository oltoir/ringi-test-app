import { request } from '@/shared/lib/axios'
import { AxiosResponse } from 'axios'
import { VacancyType } from '@/entiites/vacancy'

export const getVacancy = (id: string): Promise<AxiosResponse<VacancyType>> => {
    const url = `/vacancies/${id}`

    return request.get(url)
}

export const postVacancy = (vacancy: VacancyType) => {
    const url = `/vacancies`

    return request.post(url, vacancy)
}
