import { NextRequest } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const characterId = params.id;

  try {
    await prisma.character.delete({
      where: {
        id: characterId
      }
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting character:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete character' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}