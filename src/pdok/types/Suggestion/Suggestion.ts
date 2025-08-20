import type {
  AddressId,
  MunicipalityId,
  PostalCodeId,
  ProvinceId,
  RoadId,
  TownId,
  ParcelId,
  HectometerPostId,
  DistrictId,
  NeighborhoodId,
  ApartmentId,
  WaterBoundaryId,
} from "../Ids";

export type TownSuggestion = {
  id: TownId;
  score: number;
  type: "woonplaats";
  weergavenaam: string;
};

export type MunicipalitySuggestion = {
  id: MunicipalityId;
  type: "gemeente";
  weergavenaam: string;
  score: number;
};

export type ProvinceSuggestion = {
  id: ProvinceId;
  type: "provincie";
  weergavenaam: string;
  score: number;
};

export type RoadSuggestion = {
  id: RoadId;
  type: "weg";
  weergavenaam: string;
  score: number;
};

export type AddressSuggestion = {
  adrestype: string;
  id: AddressId;
  score: number;
  type: "adres";
  weergavenaam: string;
};

export type PostalCodeSuggestion = {
  id: PostalCodeId;
  score: number;
  type: "postcode";
  weergavenaam: string;
};

export type ParcelSuggestion = {
  id: ParcelId;
  score: number;
  type: "perceel";
  weergavenaam: string;
};

export type HectometerPostSuggestion = {
  id: HectometerPostId;
  score: number;
  type: "hectometerpaal";
  weergavenaam: string;
};

export type DistrictSuggestion = {
  id: DistrictId;
  score: number;
  type: "buurt";
  weergavenaam: string;
};

export type NeighborhoodSuggestion = {
  id: NeighborhoodId;
  score: number;
  type: "gemeentegrens";
  weergavenaam: string;
};

export type ApartmentSuggestion = {
  id: ApartmentId;
  score: number;
  type: "appartement";
  weergavenaam: string;
};

export type WaterBoundarySuggestion = {
  id: WaterBoundaryId;
  score: number;
  type: "watergrens";
  weergavenaam: string;
};

export type Suggestion =
  | AddressSuggestion
  | TownSuggestion
  | MunicipalitySuggestion
  | ProvinceSuggestion
  | RoadSuggestion
  | PostalCodeSuggestion
  | ParcelSuggestion
  | HectometerPostSuggestion
  | DistrictSuggestion
  | NeighborhoodSuggestion
  | ApartmentSuggestion
  | WaterBoundarySuggestion;
