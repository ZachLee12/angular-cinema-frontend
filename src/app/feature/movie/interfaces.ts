//properties here must match the database model
export interface Movie {
    id: string;
    time: string;
    name: string;
    numberofseats: number;
    numberofseatsbooked: number;
    seatsbooked: number[];
    imagebase64: any;
}

export interface MovieListResponse {
    movies: Movie[]
}