import type { SuggestResponse } from "./suggest.types";

const inferAddressFromRoad = (summary: string) => {
    const [streetName, cityName, province] = summary.split(", ").map(part => part.trim());

    return {
        streetName,
        cityName,
        province
    }
}

const inferAddressFromProvince = (summary: string) => {
    const [, ...province] = summary.split(" ").map(part => part.trim());
    return {
        province: province.join(" ")
    }
}

const inferAddressFromMunicipality = (summary: string) => {
    const [, ...municipality] = summary.split(" ").map(part => part.trim());
    return {
        municipality: municipality.join(" ")
    }
}

const inferAddressFromAddress = (summary: string) => {
    const [addressPart, postalCodePart, province] = summary.split(", ").map(part => part.trim());

    const streetNumber = addressPart?.split(" ").find(part => /\d/.test(part));
    const streetName = addressPart?.split(" ").filter(part => part !== streetNumber).join(" ");

    const postalCode = postalCodePart?.split(" ").find(part => /\d/.test(part));
    const cityName = postalCodePart?.split(" ").filter(part => part !== postalCode).join(" ");


    return {
        streetNumber,
        streetName,
        postalCode,
        cityName,
        province
    };
}

const inferAddressFromSummary = (type: SuggestResponse["response"]["docs"][number]["type"], summary: string) => {

    switch (type) {
        case "woonplaats":
        case "postcode":
        case "adres":
            return inferAddressFromAddress(summary);
        case "weg":
            return inferAddressFromRoad(summary);
        case "gemeente":
            return inferAddressFromMunicipality(summary);
        case "provincie":
            return inferAddressFromProvince(summary);
        default:
            return {}
    }
}

export const transform = (data: SuggestResponse) => {

    const docs = data.response.docs.map((doc) => ({
        ...doc,
        ...inferAddressFromSummary(doc.type, doc.weergavenaam),
    }));

    return { ...data, response: { ...data.response, docs } };
};
