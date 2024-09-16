import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useVacanciesList } from '@/widgets/vacancies-list'
import { VacancyCard } from '@/entiites/vacancy'
import { PaginationControls } from '@/features'
import { Input } from '@/shared/ui'

export function VacanciesList() {
    const perPage = 5
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(1)
    const { vacancies, total } = useVacanciesList({ page, perPage })

    const totalPages =
        useMemo(() => total && Math.ceil(total / perPage), [total]) || 1

    const handlePageChange = (newPage: number) => {
        setPage(newPage)
        searchParams.set('page', newPage.toString())
        setSearchParams(searchParams)
    }

    useEffect(() => {
        const pageParam = searchParams.get('page')
        const newPage = pageParam ? Number(pageParam) : 1
        if (newPage !== page) {
            setPage(newPage)
        }
    }, [searchParams, page])

    return (
        <div className="space-y-6">
            <Input placeholder="Name, company" />
            <div className="flex flex-wrap gap-5">
                {vacancies?.map((vacancy) => (
                    <VacancyCard vacancy={vacancy} key={vacancy.id} />
                ))}
            </div>
            <PaginationControls
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )
}
