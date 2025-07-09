'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Character } from '@/app/types/character';
import DeleteModal from './delete-character-modal';

export default function CharacterCard({ character }: { character: Character }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
  
    const handleDelete = async () => {
      const res = await fetch(`/api/characters/${character.id}`, {
        method: 'DELETE',
      });
  
      if (res.ok) {
        window.location.reload();
      } else {
        alert('Failed to delete character');
      }
    };
  
    return (
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-semibold">{character.name}</h2>
        <div className="mt-4 space-x-2">
          <Link
            href={`/view-character?id=${character.id}`}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            View
          </Link>
          <Link
            href={`/edit-character?id=${character.id}`}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </Link>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
        {showDeleteModal && (
          <DeleteModal
            onConfirm={handleDelete}
            onCancel={() => setShowDeleteModal(false)}
          />
        )}
      </div>
    );
  }