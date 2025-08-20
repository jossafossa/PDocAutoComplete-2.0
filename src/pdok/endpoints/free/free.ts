import type { FreeParams, FreeResponse } from "./free.types";
import { get } from "../../utils";
import { transform } from "./free.transform";

export const free = async (params: FreeParams = {}) => {
  const response = await get<FreeResponse, FreeParams>("/free", params);
  return transform(response);
}
