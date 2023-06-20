//properties here must match the database model

export interface Movie {
    id: string;
    name: string;
    desc: string[];
    genres: string[];
    actors: string[];
    playtimes: string[];
}
