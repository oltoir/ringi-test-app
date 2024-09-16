import { Button } from "@/shared/ui"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLocations } from "../vacancy-form/vacancy-form.queries"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"

export function FilterVacancies() {
    const { locations } = useLocations()
    const [searchParams, setSearchParams] = useSearchParams()
    const [isExpanded, setIsExpanded] = useState(false)
    const [visibleLocations, setVisibleLocations] = useState(5)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
        setVisibleLocations(isExpanded ? 5 : locations?.length ?? 5)
    }

    const handleLocationChange = (location: string) => {
        const currentLocations = searchParams.getAll('location')
        if (currentLocations.includes(location)) {
            searchParams.delete('location', location)
        } else {
            searchParams.append('location', location)
        }
        setSearchParams(searchParams)
    }

    const handleWorkTypeChange = (workType: string) => {
        searchParams.set('workType', workType)
        setSearchParams(searchParams)
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <p className='text-md font-semibold'>Locations</p>
            </div>
            <div className='space-y-3'>
                {locations?.slice(0, visibleLocations).map((loc) => (
                    <div key={loc} className='text-nowrap'>
                        <input
                            type="checkbox"
                            id={loc}
                            className="mr-2"
                            checked={searchParams.getAll('location').includes(loc)}
                            onChange={() => handleLocationChange(loc)}
                        />
                        <label htmlFor={loc}>{loc}</label>
                    </div>
                ))}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleExpand}
                    className="flex items-center"
                >
                    {isExpanded ? (
                        <>
                            <ChevronUp className="mr-2 h-4 w-4" />
                            Collapse
                        </>
                    ) : (
                        <>
                            <ChevronDown className="mr-2 h-4 w-4" />
                            Expand All
                        </>
                    )}
                </Button>
            </div>
            <div className="flex justify-between items-center">
                <p className='text-md font-semibold'>Work Type</p>
            </div>
            <div className='space-y-3'>
                <div className='text-nowrap'>
                    <input
                        type="radio"
                        id='fulltime'
                        className="mr-2"
                        checked={searchParams.get('workType') === 'Full-time'}
                        onChange={() => handleWorkTypeChange('Full-time')}
                    />
                    <label htmlFor='fulltime'>Full-time</label>
                </div>
                <div className='text-nowrap'>
                    <input
                        type="radio"
                        id='remote'
                        className="mr-2"
                        checked={searchParams.get('workType') === 'Remote'}
                        onChange={() => handleWorkTypeChange('Remote')}
                    />
                    <label htmlFor='remote'>Remote</label>
                </div>
            </div>
        </div>
    )
}