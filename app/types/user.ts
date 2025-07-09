import { Campaign } from "./campaign";
import { Character } from "./character";

export interface User {
    id: string;
    email: string;
    username: string;
    characters: Character[];
    campaigns: Campaign[];
}