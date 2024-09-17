import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Textarea,
    toast,
} from '@/shared/ui'

const applicationSchema = z.object({
    fullName: z.string().min(1, { message: 'Full name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().min(1, { message: 'Phone number is required' }),
    resume: z.string().min(1, { message: 'Resume link is required' }),
    coverLetter: z.string().min(1, { message: 'Cover letter is required' }),
})

type Props = {
    vacancyTitle: string
}

export const VacancyApplicationModal = ({ vacancyTitle }: Props) => {
    const form = useForm({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            resume: '',
            coverLetter: '',
        },
    })

    const onSubmit = (data: any) => {
        console.log(data)
        toast({ title: 'Application submitted successfully!' })
        form.reset()
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full" variant="outline">
                    Apply!
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Apply for: {vacancyTitle}</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to submit your application. Make
                        sure to provide accurate information.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="John Doe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            placeholder="+7 (777) 123-45-67"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="resume"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Resume Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://myresume.com/johndoe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Provide a link to your resume (e.g.,
                                        Google Drive, Dropbox)
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="coverLetter"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cover Letter</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write your cover letter here..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <Button type="submit">Submit Application</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
