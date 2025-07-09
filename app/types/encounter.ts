import { Campaign } from "./campaign";

export interface Encounter {
    id: number;
    name: string | "New Encounter";
    description: string | null;
    campaignLink: Campaign["id"];
    // enemies: 
}