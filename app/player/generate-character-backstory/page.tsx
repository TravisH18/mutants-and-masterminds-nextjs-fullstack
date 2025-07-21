'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

// import { createOpenRouter } from '@openrouter/ai-sdk-provider';
// import { streamText } from 'ai';

// export const getCharacterBackstory = async (modelName: string, input: string) => {
//     const openrouter = createOpenRouter({
//         apiKey: 'APIKEY'
//     });

//     const response = streamText({
//         model: openrouter(modelName),
//         system: "You are a writing and TTRPG assistant helping users create a backstory for a superhero they are creating. Use their prompt and give interesting unique details of a backstory that would lead to a heroic future. Be detailed in the characters appearance and relationships with other people and who those other people are to our new heroic character. Give input on possible superpowers this character could have. Be unique and creative in power designs and how they use them.",
//         prompt: input
//     });
//     await response.consumeStream();
//     return response.text;
// }

export default function BackstoryPage() {
    const [input, setInput] = useState('')
    const { messages, handleSubmit, status } = useChat();

    return (
        <div>
            <h1 className='p-4 mb-10 mx-auto'>Work with AI to create a character.</h1>
            <div className="bg-gray-400 flex flex-col w-full max-w-md py-24 mx-auto">
                
                {messages.map(message => (
                    <div className='bg-amber-500 p-2 rounded-md' key={message.id}>
                        <strong>{`${message.role}: `}</strong>
                        {message.parts.map((part, index) => {
                            switch (part.type) {
                                case 'text':
                                    return <span key={index}>{part.text}</span>;

                                // other cases can handle images, tool calls, etc
                            }
                        })}
                    </div>
                ))}

                <form onSubmit={handleSubmit}>
                    <input
                        value={input}
                        className='fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl'
                        placeholder="Send a message..."
                        disabled={status !== 'ready'}
                    />
                </form>
            </div>
        </div>
    );
}