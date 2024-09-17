import { Button, TableCell, TableRow } from '@/shared/ui'
import { VacancyPostingType } from '@/entiites/vacancy'

type Props = {
    posting: VacancyPostingType
    onEdit: (posting: VacancyPostingType) => void
    onDelete: (id: string) => void
}

export const VacancyPostingRow = ({ posting, onEdit, onDelete }: Props) => (
    <TableRow>
        <TableCell>{posting.title}</TableCell>
        <TableCell>{posting.company}</TableCell>
        <TableCell>{posting.location}</TableCell>
        <TableCell>{posting.status}</TableCell>
        <TableCell className="space-y-3">
            <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(posting)}
                className="w-full sm:w-fit"
            >
                Edit
            </Button>
            <Button
                variant="destructive"
                size="sm"
                className="w-full sm:ml-2 sm:w-fit"
                onClick={() => onDelete(posting.id)}
            >
                Delete
            </Button>
        </TableCell>
    </TableRow>
)
