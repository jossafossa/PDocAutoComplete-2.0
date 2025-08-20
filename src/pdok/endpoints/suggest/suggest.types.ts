import type { Suggestion, components, operations } from "../../pdokTypes";

export type SuggestParams = operations["suggest"]["parameters"]["query"];
export type SuggestHighlighting = components["schemas"]["highlighting"];
export type SuggestSpellcheck = components["schemas"]["spellcheck"];
export type SuggestResponse = {
  response: Omit<components["schemas"]["response"], "docs"> & {
    docs: Suggestion[];
  };
  highlighting: SuggestHighlighting;
  spellcheck: SuggestSpellcheck;
}