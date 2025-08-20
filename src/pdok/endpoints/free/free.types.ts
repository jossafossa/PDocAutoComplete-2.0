import type { components, operations } from "../../pdokTypes";
import type { Doc } from "../../pdokTypes";

export type FreeParams = operations["free"]["parameters"]["query"];
export type FreeResponse = {
  response: Omit<components["schemas"]["response"], "docs"> & {
    docs: Doc[];
  };
}
