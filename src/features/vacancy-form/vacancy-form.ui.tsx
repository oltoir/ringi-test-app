import { useForm } from 'react-hook-form'
import { Button, Input } from '@/shared/ui'
import { useLocations } from './vacancy-form.queries'

export function VacancyForm() {
    const methods = useForm()

    const { locations } = useLocations();

    const onSubmit = (data: any) => console.log(data)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods

    return (
        <div className="mx-auto w-full max-w-full sm:w-1/3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-3">
                    <div>
                        <p className="text-md">Title</p>
                        <Input
                            placeholder="Frontend developer"
                            id="title"
                            {...register('title', {
                                required: true,
                            })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.title && (
                            <p className="mt-1 text-sm text-red-600">
                                error
                                {/*{errors.title.message}*/}
                            </p>
                        )}
                    </div>
                    <div>
                        <p className="text-md">Company</p>
                        <Input
                            placeholder="Rakuten"
                            id="company"
                            {...register('company')}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.company && (
                            <p className="mt-1 text-sm text-red-600">
                                {/*{errors.company.message}*/}
                            </p>
                        )}
                    </div>
                </div>
                {/* Add more form fields as needed */}
                <Button type="submit" className="mt-6 w-full">
                    Submit
                </Button>
            </form>
        </div>
    )
}
