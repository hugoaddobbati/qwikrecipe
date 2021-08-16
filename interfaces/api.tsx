interface APIFilters {
    query?: string;
    random?: boolean;
    url?: string;
}

interface APIParams {
    handleLoading: Function;
    handleResponse: Function;
    filters: APIFilters
}

export type { APIParams, APIFilters };