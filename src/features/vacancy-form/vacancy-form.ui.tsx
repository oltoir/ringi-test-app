import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Textarea,
} from '@/shared/ui'
import { VacancyFormType } from '@/features'

const vacancySchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    company: z.string().min(1, { message: 'Company is required' }),
    location: z.string().min(1, { message: 'Location is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    type: z.enum(['Full-time', 'Contract']),
    salaryRangeMin: z
        .number()
        .min(0, { message: 'Minimum salary must be non-negative' }),
    salaryRangeMax: z
        .number()
        .min(0, { message: 'Maximum salary must be non-negative' }),
    skills: z.string().min(1, { message: 'At least one skill is required' }),
    postedDate: z.string().min(1, { message: 'Posted date is required' }),
})

type Props = {
    onSubmit: (data: VacancyFormType) => void
}

export const VacancyForm = ({ onSubmit }: Props) => {
    const form = useForm<VacancyFormType>({
        resolver: zodResolver(vacancySchema),
        defaultValues: {
            title: '',
            company: '',
            location: '',
            description: '',
            type: 'Full-time',
            salaryRangeMin: 0,
            salaryRangeMax: 0,
            skills: '',
            postedDate: '',
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Frontend Developer"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                                <Input placeholder="Acme Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="New York, NY" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Job description..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Type</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select job type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Full-time">
                                        Full-time
                                    </SelectItem>
                                    <SelectItem value="Contract">
                                        Contract
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex space-x-4">
                    <FormField
                        control={form.control}
                        name="salaryRangeMin"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Minimum Salary</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(+e.target.value)
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="salaryRangeMax"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Maximum Salary</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(+e.target.value)
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Skills (comma-separated)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="React, TypeScript, Node.js"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="postedDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Posted Date</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    )
}
