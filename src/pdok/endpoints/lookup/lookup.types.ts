import type { Doc, components, operations } from "../../pdokTypes";

export type LookupParams = operations["lookup"]["parameters"]["query"];
export type LookupResponse = {
  response: Omit<components["schemas"]["response"], "docs"> & {
    docs: Doc[];
  };
}