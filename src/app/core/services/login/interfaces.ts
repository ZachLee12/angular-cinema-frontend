export interface UserProfile {
    id: string,
    firstname: string,
    lastname: string,
    username: string,
    age: number
}

export interface VerifyTokenResponse {
    message: string
}