import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Input } from '@/shared/ui'
import { VacancyPostingType } from '@/entiites/vacancy'

type Props = {
    posting: VacancyPostingType
    onSave: (posting: VacancyPostingType) => void
    onCancel: () => void
}

export const EditVacancyPostingForm = ({
    posting,
    onSave,
    onCancel,
}: Props) => {
    const [editedPosting, setEditedPosting] = useState(posting)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setEditedPosting((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSave(editedPosting)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                name="title"
                value={editedPosting.title}
                onChange={handleChange}
                placeholder="Job Title"
            />
            <Input
                name="company"
                value={editedPosting.company}
                onChange={handleChange}
                placeholder="Company"
            />
            <Input
                name="location"
                value={editedPosting.location}
                onChange={handleChange}
                placeholder="Location"
            />
            <Input
                name="status"
                value={editedPosting.status}
                onChange={handleChange}
                placeholder="Status"
            />
            <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit">Save</Button>
            </div>
        </form>
    )
}
