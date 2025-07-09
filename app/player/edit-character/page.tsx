// app/edit-character/page.tsx

import { useState } from 'react'
import { notFound } from 'next/navigation'
import { Character } from '@/app/types/character';
import CharacterDetails from './edit-character-details'
import CharacterAbilities from './edit-character-abilities';
import CharacterAdvantages from './edit-character-advantages'
import CharacterPowers from './edit-character-powers'
import CharacterComplications from './edit-character-complications'

export default async function EditCharacterPage({
    searchParams,
}: {
    searchParams: { id: string }
}) {
    const id = searchParams.id
    const [activeTab, setActiveTab] = useState('details')

    // Fetch character data
    const res = await fetch(`http://localhost:3000/api/characters/${id}`)
    const character: Character = await res.json();

    if (!character) notFound()

    const tabs = [
        { id: 'details', label: 'Character Details' },
        { id: 'abilities', label: 'Abilities' },
        { id: 'advantages', label: 'Advantages' },
        { id: 'powers', label: 'Powers' },
        { id: 'complications', label: 'Complications' }
    ]

    // Map tabs to components
    const renderTabContent = () => {
        switch (activeTab) {
            case 'details': return <CharacterDetails character={character} />
            case 'abilities': return <CharacterAbilities character={character} />
            case 'advantages': return <CharacterAdvantages character={character} />
            case 'powers': return <CharacterPowers character={character} />
            case 'complications': return <CharacterComplications character={character} />
            default: return <CharacterDetails character={character} />
        }
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Edit Hero: {character.name}</h1>

            <div className="tab-list flex flex-wrap justify-center gap-2 border-b p-2 mb-4 overflow-x-auto">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === tab.id
                                ? 'bg-sky-500 text-white'
                                : 'bg-orange-500 hover:bg-orange-600 text-white'
                            }`}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div id="tab-content" role="tabpanel" className="mx-auto p-6 max-w-screen-lg">
                {renderTabContent()}
            </div>
        </div>
    )
}