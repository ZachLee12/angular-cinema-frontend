export interface Movie {
    id: string;
    time: string;
    name: string;
}

export interface MovieListResponse {
    movies: Movie[]
}