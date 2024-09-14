export type VacancyTimeType = 'Full-time' | 'Contract'

export type VacancySalaryRangeType = {
    min: number
    max: number
}
export type VacancyType = {
    id: string
    title: string
    company: string
    location: string
    description: string
    type: VacancyTimeType
    salaryRange: VacancySalaryRangeType
    views: number
    skills: string[]
    postedDate: string
}
