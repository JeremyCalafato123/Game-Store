import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre
{
    id: number;
    name: string;
}

interface FetchGenresResponse
{
    count: number;
    results: Genre[]
}

function useGenres()
{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState([]);
  
    useEffect(() => {

    const controller = new AbortController()

      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((response) => setGenres(response.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message)
        });

        return () => controller.abort()
    }, []);

    return { genres, error }
}

export default useGenres