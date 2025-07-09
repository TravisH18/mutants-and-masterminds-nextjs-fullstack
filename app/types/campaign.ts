import { Character } from "./character";

export interface Campaign {
    id: number;
    name: string;
    powerLevel: number | 10;
    initialPowerPoints: number;
    characters: Character[];
}