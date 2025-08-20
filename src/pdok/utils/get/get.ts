import { Cache } from "../Cache";
import { toUrlParameters } from "../toUrlParameters";
import type { Parameters } from "../utils.types";

const BASE_URL = "https://api.pdok.nl/bzk/locatieserver/search/v3_1";

const cache = new Cache();

export async function get<
  ResponseType extends Record<string, unknown>,
  ParamsType extends Parameters
>(endpoint: string, params: ParamsType) {
  const paramString = toUrlParameters(params);

  const url = `${BASE_URL}${endpoint}${paramString}`;

  const cachedResponse = cache.get(url);
  if (cachedResponse) {
    return cachedResponse as ResponseType;
  }

  let result: Response;
  try {
    result = await fetch(url.toString());
  } catch (networkError) {
    throw new Error("Network error: " + String(networkError));
  }
  if (!result.ok) {
    throw new Error(`HTTP error: ${result.status} ${result.statusText}`);
  }
  try {
    const response = (await result.json()) as ResponseType;

    cache.set(url, response);

    return response;
  } catch (jsonError) {
    throw new Error("Failed to parse JSON response: " + String(jsonError));
  }
}
