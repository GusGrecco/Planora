/**
 * Standard error shape returned by the API. Framework-agnostic — the
 * API's actual HTTP status code handling and exception filters are a
 * separate concern from this shared contract.
 */
export type ApiErrorResponse = {
    message: string;
    code: string;
    details?: Record<string, unknown>;
    requestId: string;
};


export type PaginationParams = {
    page?: number;
    limit?: number;
};

export type PaginatedResponse<T> = {
    items: T[];
    page: number;
    limit: number;
    total: number;
};
