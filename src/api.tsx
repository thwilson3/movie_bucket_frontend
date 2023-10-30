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
    }

    try {
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
      throw [err.text];
    }
  }

  static async login(username, password) {
    const data = { username, password };
    return await this.request("/login", data, "post");
  }

  static async signup(username, password, email) {
    const data = { username, password, email };
    return await this.request("/signup", data, "post")
  }

  static async getBuckets() {
    return await this.request(`users/buckets`)
  }
}
