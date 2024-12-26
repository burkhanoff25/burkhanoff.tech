import {GenreKindEnum} from "@/types/Shikimori/Responses/Enums/GenreKind.enum";

export type GenreType = {
    id: string;
    name: string;
    russian: string;
    kind: GenreKindEnum;
};