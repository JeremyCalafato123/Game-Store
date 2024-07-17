import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T>
{
    count: number;
    results: T[]
}

function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[])
{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState([]);
  
    useEffect(() => {

    const controller = new AbortController()

      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((response) => setData(response.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
        });

        return () => controller.abort()
    }, deps ? [...deps]: []);

    return { data , error }
}

export default useData