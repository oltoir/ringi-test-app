import { Button, Card, CardContent, CardFooter, CardHeader } from '@/shared/ui'
import { VacancyType } from '@/entiites/vacancy'
import { pricePrettier } from '@/shared/lib'

type Props = {
    vacancy: VacancyType
}
export function VacancyCard({ vacancy }: Props) {
    const { title, type, location, company, skills, views, salaryRange } =
        vacancy

    return (
        <Card className="w-full cursor-pointer">
            <CardHeader>
                <p className="text-xs text-gray-500 dark:text-gray-800">
                    viewed {views} times
                </p>
                <div className="flex w-full justify-between">
                    <p className="text-lg font-semibold">{title}</p>
                    <div className="h-fit rounded-lg border border-primary px-3 py-2 text-primary">
                        <p className="text-nowrap text-sm">{type}</p>
                    </div>
                </div>
                <div className="flex">
                    {salaryRange && (
                        <p className="text-md">
                            {pricePrettier({ price: salaryRange.min })} -{' '}
                            {pricePrettier({ price: salaryRange.max })}
                        </p>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-md">{company}</p>
                <p className="text-md">{location}</p>
                <div className="flex flex-wrap gap-3 text-gray-500">
                    {skills.map((skill) => (
                        <p key={skill} className="text-md">
                            {skill}
                        </p>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Respond</Button>
            </CardFooter>
        </Card>
    )
}
