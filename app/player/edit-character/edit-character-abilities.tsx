import { Character } from '@/app/types/character';

export default function CharacterAbilities({ character }: { character: Character }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Character Abilities</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input type="text" defaultValue={character.name} className="w-full p-2 border rounded" />
                </div>
                {/* Add more fields as needed */}
            </div>
        </div>
    )
}