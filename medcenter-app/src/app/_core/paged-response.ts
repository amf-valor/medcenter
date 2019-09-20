export interface PagedResponse<T>{
    currentPage: number;
    nextPage: number;
    previousPage: number;
    results: T[];
}