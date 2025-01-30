'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BsReply, BsHeart, BsHeartFill } from 'react-icons/bs';

interface Message {
    id: string;
    user: {
        name: string;
        image: string;
    };
    content: string;
    timestamp: string;
    likes: number;
    isLiked: boolean;
}

const ForumMessages = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            user: {
                name: 'John Doe',
                image: '/images/placeholder.jpg'
            },
            content: 'What do you think about the new property development in Block A?',
            timestamp: '2 hours ago',
            likes: 5,
            isLiked: false
        },
        // Add more mock messages here
    ]);

    const handleLike = (messageId: string) => {
        setMessages(messages.map(msg => {
            if (msg.id === messageId) {
                return {
                    ...msg,
                    likes: msg.isLiked ? msg.likes - 1 : msg.likes + 1,
                    isLiked: !msg.isLiked
                };
            }
            return msg;
        }));
    };

    return (
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
            <div className="space-y-6">
                {messages.map((message) => (
                    <div key={message.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                            <div className="relative w-10 h-10">
                                <Image
                                    src={message.user.image}
                                    alt={message.user.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-semibold text-gray-900">{message.user.name}</span>
                                    <span className="text-gray-500 text-sm">{message.timestamp}</span>
                                </div>
                                <p className="text-gray-700 mb-4">{message.content}</p>
                                <div className="flex items-center gap-6">
                                    <button 
                                        onClick={() => handleLike(message.id)}
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
                                    >
                                        {message.isLiked ? <BsHeartFill className="text-red-500" /> : <BsHeart />}
                                        <span>{message.likes}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                                        <BsReply />
                                        <span>Reply</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForumMessages; 