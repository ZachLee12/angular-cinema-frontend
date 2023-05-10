export interface Movie {
    id: string;
    time: string;
    name: string;
    numberofseats: number;
}

export interface MovieListResponse {
    movies: Movie[]
}