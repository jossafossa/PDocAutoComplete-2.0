import type {
  AddressId,
  MunicipalityId,
  DistrictId,
  ParcelId,
  PostalCodeId,
  ProvinceId,
  RoadId,
  TownId,
  ApartmentId,
  HectometerPostId,
} from "../Ids";

export type AddressDoc = {
  bron: "BAG";
  type: "adres";
  woonplaatscode: string;
  woonplaatsnaam: string;
  wijkcode: string;
  huis_nlt: string;
  openbareruimtetype: string;
  buurtnaam: string;
  gemeentecode: string;
  rdf_seealso: string;
  weergavenaam: string;
  huisnummertoevoeging: string;
  straatnaam_verkort: string;
  id: AddressId;
  gekoppeld_perceel: string[];
  gemeentenaam: string;
  buurtcode: string;
  wijknaam: string;
  identificatie: string;
  openbareruimte_id: string;
  waterschapsnaam: string;
  provinciecode: string;
  provincienaam: string;
  centroide_ll: string;
  nummeraanduiding_id: string;
  waterschapscode: string;
  adresseerbaarobject_id: string;
  huisnummer: number;
  provincieafkorting: string;
  centroide_rd: string;
  straatnaam: string;
};

export type PostalDoc = {
  bron: "BAG";
  type: "postcode";
  woonplaatscode: string;
  woonplaatsnaam: string;
  openbareruimtetype: string;
  gemeentecode: string;
  weergavenaam: string;
  straatnaam_verkort: string;
  id: PostalCodeId;
  gemeentenaam: string;
  identificatie: string;
  openbareruimte_id: string;
  provinciecode: string;
  postcode: string;
  provincienaam: string;
  centroide_ll: string;
  provincieafkorting: string;
  centroide_rd: string;
  straatnaam: string;
};

export type BagRoadDoc = {
  bron: "BAG/NWB";
  type: "weg";
  woonplaatscode: string;
  woonplaatsnaam: string;
  nwb_id: string;
  openbareruimtetype: string;
  gemeentecode: string;
  rdf_seealso: string;
  weergavenaam: string;
  straatnaam_verkort: string;
  id: RoadId;
  gemeentenaam: string;
  identificatie: string;
  openbareruimte_id: string;
  provinciecode: string;
  provincienaam: string;
  centroide_ll: string;
  provincieafkorting: string;
  centroide_rd: string;
  straatnaam: string;
};

export type NWBRoadDoc = {
  bron: "NWB";
  type: "weg";
  woonplaatscode: string;
  woonplaatsnaam: string;
  nwb_id: string;
  gemeentecode: string;
  weergavenaam: string;
  straatnaam_verkort: string;
  id: RoadId;
  gemeentenaam: string;
  identificatie: string;
  provinciecode: string;
  provincienaam: string;
  centroide_ll: string;
  provincieafkorting: string;
  centroide_rd: string;
  straatnaam: string;
};

export type TownDoc = {
  bron: "BAG";
  type: "woonplaats";
  identificatie: string;
  provinciecode: string;
  woonplaatscode: string;
  woonplaatsnaam: string;
  provincienaam: string;
  centroide_ll: string;
  gemeentecode: string;
  rdf_seealso: string;
  weergavenaam: string;
  provincieafkorting: string;
  centroide_rd: string;
  id: TownId;
  gemeentenaam: string;
};

export type ProvinceDoc = {
  bron: "Bestuurlijke Grenzen";
  type: "provincie";
  identificatie: string;
  provinciecode: string;
  centroide_ll: string;
  weergavenaam: string;
  provincienaam: string;
  provincieafkorting: string;
  centroide_rd: string;
  id: ProvinceId;
};

export type MunicipalityDoc = {
  bron: "Bestuurlijke Grenzen";
  type: "gemeente";
  identificatie: string;
  provinciecode: string;
  centroide_ll: string;
  weergavenaam: string;
  provincienaam: string;
  provincieafkorting: string;
  centroide_rd: string;
  gemeentecode: string;
  id: MunicipalityId;
  gemeentenaam: string;
};

export type ParcelDoc = {
  bron: "DKK";
  type: "perceel";
  identificatie: string;
  kadastrale_aanduiding: string[];
  kadastrale_gemeentecode: string;
  kadastrale_sectie: string;
  kadastrale_grootte: number;
  perceelnummer: number;
  centroide_ll: string;
  weergavenaam: string;
  kadastrale_gemeentenaam: string;
  centroide_rd: string;
  id: ParcelId;
};

export type HectometerPostDoc = {
  bron: "NWB";
  type: "hectometerpaal";
  identificatie: string;
  wegnummer: string;
  centroide_ll: string;
  hectometernummer: string;
  weergavenaam: string;
  centroide_rd: string;
  id: HectometerPostId;
};

export type DistrictDoc = {
  bron: "CBS";
  type: "wijk";
  wijknaam: string;
  identificatie: string;
  provinciecode: string;
  provincienaam: string;
  wijkcode: string;
  centroide_ll: string;
  gemeentecode: string;
  weergavenaam: string;
  provincieafkorting: string;
  centroide_rd: string;
  id: DistrictId;
  gemeentenaam: string;
};

export type NeighborhoodDoc = {
  bron: "CBS";
  type: "buurt";
  wijknaam: string;
  identificatie: string;
  provinciecode: string;
  provincienaam: string;
  wijkcode: string;
  centroide_ll: string;
  buurtnaam: string;
  gemeentecode: string;
  weergavenaam: string;
  provincieafkorting: string;
  centroide_rd: string;
  id: string;
  gemeentenaam: string;
  buurtcode: string;
};

export type ApartmentDoc = {
  bron: "DKK";
  type: "appartementsrecht";
  identificatie: string;
  kadastrale_aanduiding: string[];
  kadastrale_gemeentecode: string;
  kadastrale_sectie: string;
  volgnummer: number;
  perceelnummer: number;
  centroide_ll: string;
  weergavenaam: string;
  kadastrale_gemeentenaam: string;
  centroide_rd: string;
  id: ApartmentId;
};

export type Doc =
  | ProvinceDoc
  | MunicipalityDoc
  | ParcelDoc
  | AddressDoc
  | PostalDoc
  | BagRoadDoc
  | NWBRoadDoc
  | TownDoc
  | ApartmentDoc
  | NeighborhoodDoc
  | HectometerPostDoc
  | DistrictDoc;
