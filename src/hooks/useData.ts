import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T>
{
    count: number;
    results: T[]
}

function useData<T>(endpoint: string)
{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState([]);
  
    useEffect(() => {

    const controller = new AbortController()

      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((response) => setData(response.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
        });

        return () => controller.abort()
    }, []);

    return { data , error }
}

export default useData