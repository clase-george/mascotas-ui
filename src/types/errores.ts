export type APIError = {
    error:string;
}
export type APIResult<T, E = APIError> =  | {ok: true, data?: T} | {ok: false, error: E};