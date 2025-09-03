import type { components, operations } from "../../types";
import type { Doc } from "../../types";

export type FreeParams = operations["free"]["parameters"]["query"];
export type FreeResponse = {
  response: Omit<components["schemas"]["response"], "docs"> & {
    docs: Doc[];
  };
};
