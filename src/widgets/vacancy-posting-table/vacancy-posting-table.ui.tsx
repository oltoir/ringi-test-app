import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/shared/ui'
import { VacancyPostingRow } from '@/features'
import { VacancyPostingType } from '@/entiites/vacancy'

type Props = {
    postings: VacancyPostingType[]
    onEdit: (posting: VacancyPostingType) => void
    onDelete: (id: string) => void
}

export const VacancyPostingTable = ({ postings, onEdit, onDelete }: Props) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {postings.map((posting) => (
                <VacancyPostingRow
                    key={posting.id}
                    posting={posting}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </TableBody>
    </Table>
)
