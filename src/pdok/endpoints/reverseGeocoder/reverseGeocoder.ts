import type { ReverseGeocoderParams, ReverseGeocoderResponse } from "./reverseGeocoder.types";
import { get } from "../../utils";
import { transform } from "./reverseGeocoder.transform";

export const reverseGeocoder = async (params: ReverseGeocoderParams = {}) => {
  const response = await get<ReverseGeocoderResponse, ReverseGeocoderParams>("/reverse", params);
  return transform(response);
}
