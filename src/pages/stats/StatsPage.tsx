import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/shared/ui'
import { useState } from 'react'
import { VacancyPostingType } from '@/entiites/vacancy'
import { VacancyPostingTable } from '@/widgets'
import { EditVacancyPostingForm } from '@/features'

const initialVacancyPostings: VacancyPostingType[] = [
    {
        id: '1',
        title: 'Frontend Developer',
        company: 'Tech Co',
        location: 'New York',
        status: 'Active',
    },
    {
        id: '2',
        title: 'Backend Developer',
        company: 'Software Inc',
        location: 'San Francisco',
        status: 'Active',
    },
    {
        id: '3',
        title: 'UX Designer',
        company: 'Design Studio',
        location: 'London',
        status: 'Closed',
    },
    {
        id: '4',
        title: 'Fullstack Developer',
        company: 'Web Studio',
        location: 'Almaty',
        status: 'Closed',
    },
    {
        id: '5',
        title: 'Mobile Developer',
        company: 'Apple',
        location: 'Tokyo',
        status: 'Closed',
    },
    {
        id: '6',
        title: 'Devops Engineer',
        company: 'FC Manchester City',
        location: 'London',
        status: 'Closed',
    },
]

export default function StatsPage() {
    const [vacancyPostings, setVacancyPostings] = useState<
        VacancyPostingType[]
    >(initialVacancyPostings)
    const [editingPosting, setEditingPosting] =
        useState<VacancyPostingType | null>(null)

    const handleEdit = (posting: VacancyPostingType) => {
        setEditingPosting(posting)
    }

    const handleSave = (editedPosting: VacancyPostingType) => {
        setVacancyPostings((prevPostings) =>
            prevPostings.map((posting) =>
                posting.id === editedPosting.id ? editedPosting : posting
            )
        )
        setEditingPosting(null)
    }

    const handleDelete = (id: string) => {
        setVacancyPostings((prevPostings) =>
            prevPostings.filter((posting) => posting.id !== id)
        )
    }
    return (
        <div className="my-12">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Vacancy Posting Management Dashboard</CardTitle>
                    <CardDescription>
                        View, edit, or delete your vacancy postings
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <VacancyPostingTable
                        postings={vacancyPostings}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                    <Dialog
                        open={!!editingPosting}
                        onOpenChange={() => setEditingPosting(null)}
                    >
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Vacancy Posting</DialogTitle>
                            </DialogHeader>
                            {editingPosting && (
                                <EditVacancyPostingForm
                                    posting={editingPosting}
                                    onSave={handleSave}
                                    onCancel={() => setEditingPosting(null)}
                                />
                            )}
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </div>
    )
}
