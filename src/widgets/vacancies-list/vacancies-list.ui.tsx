import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useVacanciesList } from '@/widgets/vacancies-list'
import { VacancyCard } from '@/entiites/vacancy'
import {
    FilterVacancies,
    PaginationControls,
    VacancyApplicationModal,
} from '@/features'
import { Input } from '@/shared/ui'
import { useDebounce } from '@/shared/lib/useDebounce'

export function VacanciesList() {
    const perPage = 10
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 300)
    const location = searchParams.getAll('location')
    const workType = searchParams.get('workType')

    const { vacancies, total } = useVacanciesList({
        page,
        perPage,
        location,
        type: workType,
        q: debouncedSearchTerm,
    })

    const totalPages =
        useMemo(() => total && Math.ceil(total / perPage), [total]) || 1

    const handlePageChange = (newPage: number) => {
        setPage(newPage)
        searchParams.set('page', newPage.toString())
        setSearchParams(searchParams)
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const pageParam = searchParams.get('page')
        const newPage = pageParam ? Number(pageParam) : 1
        if (newPage !== page) {
            setPage(newPage)
        }
    }, [searchParams, page])

    useEffect(() => {
        const newSearchParams = new URLSearchParams(searchParams)
        if (debouncedSearchTerm) {
            newSearchParams.set('search', debouncedSearchTerm)
            newSearchParams.set('page', '1')
        } else {
            newSearchParams.delete('search')
        }
        setSearchParams(newSearchParams)
    }, [debouncedSearchTerm, setSearchParams])

    return (
        <div className="flex flex-col gap-24 sm:flex-row">
            <FilterVacancies />
            <div className="flex-grow space-y-6">
                <Input
                    placeholder="Name, company"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div className="flex flex-wrap gap-5">
                    {vacancies?.map((vacancy) => (
                        <VacancyCard
                            vacancy={vacancy}
                            key={vacancy.id}
                            applyNode={
                                <VacancyApplicationModal
                                    vacancyTitle={vacancy.title}
                                />
                            }
                        />
                    ))}
                </div>
                <PaginationControls
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}
