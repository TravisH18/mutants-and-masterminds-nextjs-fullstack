"use client";
import React from 'react';
import Link from 'next/link';
import { Character } from '@/app/types/character';
import CharacterCard from './character-card';
import prisma from '@/app/lib/prisma';
// interface Character {
//   id: number;
//   name: string;
//   player_id: number;
//   altIdentity: string;
// }

export default async function ViewCharactersPage({
  searchParams,
}: {
  searchParams: { player_id: string };
}) {
  const playerId = searchParams.player_id;

  //const res = await fetch(`http://localhost:3000/api/characters/user?player_id=${playerId}`);
  //const characters: Character[] = await res.json();
  const characters = await prisma.character.findMany({
    where: {
      userId: playerId
    }
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map( (character: Character) => (
          // <div key={character.id} className='p-4'>
            <CharacterCard key={character.id} character={character} />
            //* <Link href={`./view-character?id=${character.id}`}>View Character</Link> */}
          // <div>
        ))};
      </div>
    </div>
  );
}
