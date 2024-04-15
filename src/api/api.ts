// need to store in the env file on the server in real project
const BASE_API_URL = "https://api.openweathermap.org/data/2.5/";

export async function apiFetcher(url: string, options?: RequestInit) {
  const { ...fetchOptions } = options ?? {};

  const res = await fetch(`${BASE_API_URL}${url}`, fetchOptions);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    //Need to create a specific interface for errorInfo
    const errorInfo = await res.json();
    const error = new Error(
      errorInfo.message || "An error occurred while fetching the data."
    );

    throw error;
  }

  return res.json();
}
