import { useQuery } from "@tanstack/react-query"
import { getLocations } from "./vacancy-form.model"

export const useLocations = ()=>{
    const {data, isLoading} = useQuery({
        queryKey: ['locations'],
        queryFn:()=> getLocations().then((res) => res.data)
    })

    return{
        locations: data,
        isLoading
    }
}