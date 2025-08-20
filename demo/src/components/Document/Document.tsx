import type { Doc } from "pdok";
import { Block } from "../Block";

export const Document = (doc: Doc) => {
  const { type, weergavenaam } = doc;

  if (type === "provincie") {
    return (
      <Block title={`Provincie: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "gemeente") {
    return (
      <Block title={`Gemeente: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "woonplaats") {
    return (
      <Block title={`Woonplaats: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "weg") {
    return (
      <Block title={`Weg: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "postcode") {
    return (
      <Block title={`Postcode: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "adres") {
    return (
      <Block title={`Adres: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "perceel") {
    return (
      <Block title={`Perceel: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "hectometerpaal") {
    return (
      <Block title={`Hectometerpaal: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "wijk") {
    return (
      <Block title={`Wijk: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "buurt") {
    return (
      <Block title={`Buurt: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  if (type === "appartementsrecht") {
    return (
      <Block title={`Appartementsrecht: ${weergavenaam}`}>
        <pre>{JSON.stringify(doc, null, 2)}</pre>
      </Block>
    );
  }

  return null;
};
