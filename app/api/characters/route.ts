import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma  from '@/app/lib/prisma';

// Define the expected shape of the form data
const CharacterSchema = z.object({
  name: z.string().min(1),
  player: z.string().min(1),
  altIdentity: z.string().min(1),
  altIdentityType: z.string().optional(),
  gender: z.string().optional(),
  age: z.number().int().optional(),
  height: z.string().optional(),
  weight: z.string().optional(),
  eyes: z.string().optional(),
  hair: z.string().optional(),
  groupAffiliation: z.string().optional(),
  baseOfOperations: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate input
    const result = CharacterSchema.safeParse(formData);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;
    
    const newCharacter = await prisma.character.create({
      data: {
        name: data.name,
        player: data.player,
        altIdentity: data.altIdentity,
        altIdentityType: data.altIdentityType || null,
        gender: data.gender || null,
        age: data.age || null,
        height: data.height || null,
        weight: data.weight || null,
        eyes: data.eyes || null,
        hair: data.hair || null,
        groupAffiliation: data.groupAffiliation || null,
        baseOfOperations: data.baseOfOperations || null,
      },
    });

    return NextResponse.json(newCharacter, { status: 201 });
  } catch (error) {
    console.error("Error creating character:", error);
    return NextResponse.json(
      { error: "Failed to create character" },
      { status: 500 }
    );
  }
}