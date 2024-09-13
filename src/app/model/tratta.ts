import { Station } from "./station";

export interface Tratta {
    trattaId: string;
    partenza: string;
    destinazione: string;
    mezzo: string;
    gestore: string;
    stations: Array<Station>;
    src: string;
    srcimg: string;
    note: string;
}