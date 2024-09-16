import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/shared/ui'

type Props = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function PaginationControls({
    currentPage,
    totalPages,
    onPageChange,
}: Props) {
    const renderPaginationItems = () => {
        const items = []
        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <PaginationItem key={i} className="cursor-pointer">
                    <PaginationLink
                        onClick={() => onPageChange(i)}
                        isActive={currentPage === i}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        return items
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem className="cursor-pointer">
                    <PaginationPrevious
                        onClick={() =>
                            onPageChange(Math.max(1, currentPage - 1))
                        }
                    />
                </PaginationItem>
                {renderPaginationItems()}
                <PaginationItem className="cursor-pointer">
                    <PaginationNext
                        onClick={() =>
                            onPageChange(Math.min(totalPages, currentPage + 1))
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
