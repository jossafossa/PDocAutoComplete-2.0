import type { Suggestion, components, operations } from "../../pdokTypes";

export type ReverseGeocoderParams = operations["reverseGeocoder"]["parameters"]["query"];
export type ReverseGeocoderResponse = {
  response: Omit<components["schemas"]["response"], "docs"> & {
    docs: Suggestion[];
  };
}