//properties here must match the database model

export interface Movie {
    id: string;
    name: string;
    description: string[];
    genres: string[];
    actors: string[];
    showtimes: string[];
    display?: boolean;
    imgUrl?: string;
}
