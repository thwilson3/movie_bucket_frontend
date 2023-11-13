export type MovieType = {
  id: string;
  title: string;
  image?: string;
  release_date?: string;
  runtime?: string;
  genre?: string;
  bio?: string;
  is_watched?: boolean;
}

export type BucketType = {
  id: number;
  bucket_name: string;
  genre?: string;
  description?: string;
}

export type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
}

export type BucketLinkType = {
  id: number;
  bucket_id: number;
  invite_code: string;
  expiration_date: string;
}

export type NewMovieType = {
  bucket_id: string;
  title: string;
  image?: string;
  release_date?: string;
  runtime?: string;
  genre?: string;
  bio?: string;
  is_watched?: boolean;
};

export type MovieFromSearchType = {
  title: string;
  image?: string;
  release_date?: string;
  runtime?: string;
  genre?: string;
  bio?: string;
};

export type MovieProps = {
  movie: MovieType;
  movieIds: string[];
  deleteMovie: DeleteMovieFunction;
  addMovie: AddMovieFunction;
}

export type BucketProps = {
  bucket: BucketType;
};

export type UserContextType = {
  currentUser?: UserType | null;
};

export type HeaderOptions = {
  title?: string;
  buttons: OptionButtonType[] | [];
};

export type OptionButtonType =
  | {
      type: "Link";
      text: string;
      function?: () => void;
      path: string;
    }
  | {
      type: "Toggle";
      text: string;
      function: () => void;
    };

export type RouteParams = {
  id: string;
};

export type LoginFunction = (props: {
  username: string;
  password: string;
}) => void;

export type LogoutFunction = () => void;

export type SignupFunction = (props: {
  username: string;
  password: string;
  email: string;
}) => void;

export type DeleteMovieFunction = (
  id: string,
  movieId: string
) => Promise<void>;

export type AddMovieFunction = (movie: NewMovieType) => Promise<void>;

export type FetchSearchResultsFunction = (searchTerm: string) => Promise<void>;
