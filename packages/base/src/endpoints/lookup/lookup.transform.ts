import { pointToLatLong } from "../../utils/";
import type { LookupResponse } from "./lookup.types";

const mapDocWithPosition = (doc: LookupResponse["response"]["docs"][number]) => ({
    ...doc,
    position: pointToLatLong(doc.centroide_ll),
});


export const transform = (data: LookupResponse) => {

    const docs = data.response.docs.map(mapDocWithPosition);

    return {
        ...data,
        response: {
            ...data.response,
            docs
        },
    };
};
