import { PaginatedResponse, request } from '@/shared/lib'
import { VacancyType } from '@/entiites/vacancy'
import { VacanciesListParams } from '@/widgets/vacancies-list'

export const getVacanciesList = async (
    params: VacanciesListParams
): Promise<PaginatedResponse<VacancyType[]>> => {
    const { page, perPage } = params
    const url = `/vacancies?_page=${page}&_limit=${perPage}`

    const res = await request.get(url)
    const totalCount = res.headers['x-total-count']

    return {
        total: totalCount,
        data: res.data,
    }
}
