import { useEffect, useRef, useState } from "react";
import { lookup, suggest, type Doc, type Suggestion } from "pdok";
import { Document } from "./components";
import styles from "./App.module.css";

export const App = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [docOutput, setDocOutput] = useState<Doc | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const update = async () => {
    const formData = new FormData(formRef.current!);

    const q = formData.get("q") as string;
    const type = formData.get("type") as string;
    const bron = formData.get("bron") as string;
    const fq = [
      type && type !== "all" ? `type:${type}` : undefined,
      bron && bron !== "all" ? `bron:${bron}` : undefined,
    ];

    const suggestions = await suggest({
      q,
      fq: fq.filter(Boolean) as string[],
      rows: 50,
    });

    const lookupResponse = await lookup({
      id: suggestions.response.docs[0]?.id ?? "hoi",
    });

    setSuggestions(suggestions.response.docs);
    setDocOutput(lookupResponse.response.docs[0] ?? {});
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    update();
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} onChange={handleSubmit} ref={formRef}>
        <label htmlFor="address-input">Address:</label>
        <input
          type="text"
          name="q"
          defaultValue="den haag"
          id="address-input"
        />
        <br />

        <label htmlFor="type-select">Type:</label>
        <select name="type" id="type-select">
          <option value="all" selected>
            Alle
          </option>
          <option value="provincie">Provincie</option>
          <option value="gemeente">Gemeente</option>
          <option value="woonplaats">Woonplaats</option>
          <option value="weg">Weg</option>
          <option value="postcode">Postcode</option>
          <option value="adres" selected>
            Adres
          </option>
          <option value="perceel">Perceel</option>
          <option value="hectometerpaal">Hectometerpaal</option>
          <option value="wijk">Wijk</option>
          <option value="buurt">Buurt</option>
          <option value="waterschapsgrens">Waterschapsgrens</option>
          <option value="appartementsrecht">Appartementsrecht</option>
        </select>
        <br />

        <label htmlFor="bron">Bron:</label>
        <select name="bron" id="bron">
          <option value="all" selected>
            Alle
          </option>
          <option value="BAG">
            BAG: Basisregistratie Adressen en Gebouwen
          </option>
          <option value="NWB">NWB: Nationaal Wegen Bestand</option>
          <option value="BAG/NWB">
            BAG/NWB: BAG openbareruimtes die gekoppeld zijn met NWB wegen
          </option>
          <option value="DKK">DKK: Digitale Kadastrale Kaart</option>
          <option value="Bestuurlijke Grenzen">Bestuurlijke Grenzen</option>
          <option value="CBS">CBS: Centraal Bureau voor de Statistiek</option>
          <option value="HWH">HWH: Het Waterschapshuis</option>
        </select>
      </form>

      <div className={styles.output}>
        <pre>{JSON.stringify(suggestions, null, 2)}</pre>
        {docOutput && <Document {...docOutput} />}
      </div>
    </>
  );
};
