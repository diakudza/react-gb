import {attempt} from "../lib/attempts";
import {endpoints} from "../endpoints";


export const wordApi = {
    getRuWord: async (word) => attempt(endpoints.word.replace(':word', word))
}