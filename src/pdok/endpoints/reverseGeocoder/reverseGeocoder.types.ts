import type { Suggestion, components, operations } from "../../types";

export type ReverseGeocoderParams =
  operations["reverseGeocoder"]["parameters"]["query"];
export type ReverseGeocoderResponse = {
  response: Omit<components["schemas"]["response"], "docs"> & {
    docs: Suggestion[];
  };
};
