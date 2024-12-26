import axios from "axios";
import {host} from "@/lib/anilibria/functions/host";
import {AdvancedSearchType} from "@/types/Anilibria/Queries/AdvancedSearch.type";
import {AnimeTitleType} from "@/types/Anilibria/Responses/AnimeTitle.type";

const anilibriaHost = host.api();

export const advancedSearch = async ({ originalName, englishName, russianName, year, duration, filter, limit }: AdvancedSearchType) => {
    const cleanOriginalName = originalName?.replace(/['"]+/g, '');
    const cleanEnglishName = englishName?.replace(/['"]+/g, '');
    const cleanRussianName = russianName?.replace(/['"]+/g, '');

    const originalCheck = `{code} ~= "${cleanOriginalName}" or {names.en} ~= "${cleanOriginalName}" or {names.ru} ~= "${cleanOriginalName}"`;
    const englishCheck = `{code} ~= "${cleanEnglishName}" or {names.en} ~= "${cleanEnglishName}" or {names.ru} ~= "${cleanEnglishName}"`;
    const russianCheck = `{code} ~= "${cleanRussianName}" or {names.en} ~= "${cleanRussianName}" or {names.ru} ~= "${cleanRussianName}"`;
    const namesCheck = `(${originalCheck} or ${englishCheck} or ${russianCheck})`;

    const animeTitle: AnimeTitleType = (
        await axios.get(
            `${anilibriaHost}title/search/advanced?query=${namesCheck} and {type.length} in ${duration} and {season.year} == ${year}&filter=${filter}&limit=${limit}`
        )
    ).data.list[0];

    return animeTitle;
};