// app/edit-character/edit-character-details.tsx
import { Character } from '@/app/types/character';

export default function CharacterDetails({ character }: { character: Character }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Character Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            defaultValue={character.name}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Alternate Identity</label>
          <input
            type="text"
            defaultValue={character.altIdentity}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
}