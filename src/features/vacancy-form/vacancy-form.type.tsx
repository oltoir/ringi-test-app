import { VacancyTimeType } from '@/entiites/vacancy/vacancy.type.ts'

export type VacancyFormType = {
    id: string
    title: string
    company: string
    location: string
    description: string
    type: VacancyTimeType
    views: number
    skills: string
    postedDate: string
    salaryRangeMin: number
    salaryRangeMax: number
}
