

export interface Movie{
    id: number,
    title: string,
    image?: string,
    release_date?: string,
    runtime?: string,
    genre?: string,
    bio?: string,
    is_watched: boolean,
}

export interface Bucket{
    id: number,
    bucket_name: string,
    genre?: string,
    description?: string,
}

export interface User{
    id: number,
    username: string,
    email: string,
    password: string,
}

export interface BucketLink{
    id: number,
    bucket_id: number,
    invite_code: string,
    expiration_date: string,
}