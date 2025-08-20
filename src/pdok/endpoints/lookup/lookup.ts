import type { LookupParams, LookupResponse } from "./lookup.types";
import { get } from "../../utils";
import { transform } from "./lookup.transform";

export const lookup = async (params: LookupParams) => {
  const response = await get<LookupResponse, LookupParams>("/lookup", params);
  return transform(response);
}
