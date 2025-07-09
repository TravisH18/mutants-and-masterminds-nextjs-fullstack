
import { notFound } from 'next/navigation';
import prisma from '@/app/lib/prisma';

export default async function ViewCharacterPage({
    searchParams,
}: {
    searchParams: { id: string };
}) {
    const id = searchParams.id;
    const character = await prisma.character.findUnique({
        where: {
            id: String(id)
        }
    })

    if (!character) {
        notFound();
    }

    return (
        // TODO use character sheet componenet here
        <div className="p-6">
            <h1 className="text-2xl font-bold">{character.name}</h1>
            <p>Alternate Identity: {character.altIdentity}</p>
            {/* Add more fields as needed */}
        </div>
    );
}