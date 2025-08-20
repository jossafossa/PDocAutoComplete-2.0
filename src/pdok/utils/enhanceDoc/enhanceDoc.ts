import type { Doc } from "../../pdokTypes";
import { pointToLatLong } from "../pointToLatLong/pointToLatLong";

type DocWithLatLong<T extends Record<string, unknown>> = Omit<
  T,
  "centroide_ll" | "centroide_rd"
> & {
  centroide_ll: { lat: number; long: number } | undefined;
  centroide_rd: { lat: number; long: number } | undefined;
};

export const enhanceDoc = <T extends Doc>(doc: T): DocWithLatLong<T> | T => {
  const { centroide_ll, centroide_rd } = doc;

  if (!centroide_ll && !centroide_rd) return doc;
  return {
    ...doc,
    centroide_ll: pointToLatLong(centroide_ll),
    centroide_rd: pointToLatLong(centroide_rd),
  };
};
