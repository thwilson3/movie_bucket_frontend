import { NewMovieType } from "./interfaces";

const BASE_URL = "http://localhost:5001";

export default class MovieBucketAPI {
  static token: string | null;

  static async request(endpoint: string, data = {}, method = "get") {
    let url = `${BASE_URL}/${endpoint}`;
    const headers = {
      Authorization: `Bearer ${MovieBucketAPI.token} `,
      "Content-Type": "application/json",
    };
    let body;


    if (method !== "get") {
      body = JSON.stringify(data);
    } else {
      const params = new URLSearchParams(data);
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      console.log("params", params);

    }

    try {
      console.log("body in api", body);
      const response = await fetch(url, {
        method,
        headers,
        body: body ? body : null,
      });

      if (!response.ok) {
        const errorMsg = await response.text();
        throw [errorMsg];
      }

      return await response.json();
    } catch (err: unknown) {
      console.error(err);
    }
  }

  static async login(username: string, password: string) {
    const data = { username, password };
    return await this.request("/login", data, "POST");
  }

  static async signup(username: string, password: string, email: string) {
    const data = { username, password, email };
    return await this.request("/signup", data, "POST");
  }

  static async getBuckets() {
    return await this.request("users/buckets");
  }

  static async getSingleBucket(bucket_id: string) {
    const data = { bucket_id };
    return await this.request("users/buckets", data);
  }

  static async createBucket(
    bucket_name: string,
    description: string,
    genre: string
  ) {
    const data = { bucket_name, description, genre };
    return await this.request("users/buckets", data, "POST");
  }

  static async getMovies(bucket_id: string) {
    const data = { bucket_id };
    return await this.request("users/buckets/movies", data);
  }

  static async updateMovieWatchStatus(bucket_id: string, movie_id: string) {
    const data = { bucket_id, movie_id };
    return await this.request("users/buckets/movies", data, "PATCH");
  }

  static async deleteMovie(bucket_id: string, movie_id: string) {
    console.log("bucketid in api delete", bucket_id);

    const data = { bucket_id, movie_id };

    console.log("data in delete api", data);

    return await this.request("users/buckets/movies", data, "DELETE");
  }

  static async addMovie(movie: NewMovieType){
    return await this.request("users/buckets/movies", movie, "POST")
  }

  static async getInviteCode(bucket_id: string) {
    const data = { bucket_id };
    return await this.request("users/buckets/invite", data);
  }

  static async getSearchResults(query: string) {
    const data = { query };
    return await this.request("api/search/movies", data);
  }
}
