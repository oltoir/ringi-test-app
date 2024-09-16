import { request } from "@/shared/lib"
import { AxiosResponse } from "axios"

export const getLocations = ():Promise<AxiosResponse<string[]>> => {
    const url = `/locations`

    return request.get(url)
}