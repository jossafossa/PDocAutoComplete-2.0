import type { SuggestParams, SuggestResponse } from "./suggest.types";
import { get } from "../../utils";
import { transform } from "./suggest.transform";

export const suggest = async (params: SuggestParams) => {
  const response = await get<SuggestResponse, SuggestParams>(
    "/suggest",
    params
  );

  return transform(response);
};
