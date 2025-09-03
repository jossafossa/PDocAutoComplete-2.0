import type { Parameters } from "../utils.types";

export const toUrlParameters = (params: Parameters) => {
  if (!params) return "";
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach(v => searchParams.append(key, v));
    } else {
      searchParams.append(key, String(value));
    }
  }
  return `?${searchParams.toString()}`;
}