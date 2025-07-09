// types/character.ts
export interface Character {
    id: number;
    name: string;
    user: string; // corresponds to `user` in DB
    userId: number
    altIdentity: string; // corresponds to `alt_identity`
    altIdentityType?: string | null; // corresponds to `alt_identity_type`
    gender?: string | null;
    age?: number | null;
    height?: string | null;
    weight?: string | null;
    eyes?: string | null;
    hair?: string | null;
    groupAffiliation?: string | null;
    baseOfOperations?: string | null;
    createdAt: Date;
  }