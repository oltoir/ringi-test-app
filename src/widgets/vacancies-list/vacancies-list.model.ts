import { request } from '@/shared/lib'
import { AxiosResponse } from 'axios'
import { VacancyType } from '@/entiites/vacancy'

export const getVacanciesList = (): Promise<AxiosResponse<VacancyType[]>> => {
    const url = `/vacancies`

    return request.get(url)
}
