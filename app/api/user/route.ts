// app/api/characters/user/route.ts
import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { Character } from '@/app/types/character';

// Helper to convert snake_case to camelCase
function snakeToCamel(obj: Record<string, any>): Character {
  const result: Partial<Character> = {};
  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase()) as keyof Character;
    result[camelKey] = obj[key];
  }
  return result as Character;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const playerId = searchParams.get('player_id');

  if (!playerId) {
    return new Response(JSON.stringify({ error: 'Missing player_id' }), {
      status: 400,
    });
  }

  try {
    const result = await db.query(
      'SELECT * FROM characters WHERE player_id = $1',
      [playerId]
    );

    const characters = result.rows.map(snakeToCamel);

    return new Response(JSON.stringify(characters), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching characters:', error);
    return new Response(JSON.stringify({ error: 'Database error' }), {
      status: 500,
    });
  }
}