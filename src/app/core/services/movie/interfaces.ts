type Showtime = string;
export function isValidShowtimeFormat(showtime: string): showtime is Showtime {
    const regex = /^([01][0-9]|2[0-3]):[0-5][0-9] (AM|PM)/
    return regex.test(showtime)
}

export interface Hall {
    id: string,
    movieId: string,
    hallSize: "BIG" | "MEDIUM" | "SMALL",
    showtime: Showtime,
    numberOfSeats: number
}

export interface SeatBooked {
    rowId: number,
    columnId: number,
    selected: boolean
}

export interface UserBooking {
    id: string,
    hallId: string,
    userId: string,
    movieId: string,
    seatsBooked: SeatBooked[]
}
