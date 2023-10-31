

export interface MovieType{
    id: number,
    title: string,
    image?: string,
    release_date?: string,
    runtime?: string,
    genre?: string,
    bio?: string,
    is_watched: boolean,
}

export interface BucketType{
    id: number,
    bucket_name: string,
    genre?: string,
    description?: string,
}

export interface UserType{
    id: number,
    username: string,
    email: string,
    password: string,
}

export interface BucketLinkType{
    id: number,
    bucket_id: number,
    invite_code: string,
    expiration_date: string,
}

export type UserContextType = {
    currentUser?: UserType | null,
    setCurrentUser: (user: UserType | null) => void
}

export type HeaderOptions = {
    title?: string;
    text: string;
    function: () => void;
    path: string;
  };