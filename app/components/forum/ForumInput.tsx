'use client';

import { useState } from 'react';
import { BsSend } from 'react-icons/bs';

const ForumInput = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (message.trim()) {
            // Here you would handle sending the message
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    return (
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
            <div className="flex gap-4">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 resize-none h-[100px] placeholder-gray-500"
                />
                <button
                    onClick={handleSubmit}
                    disabled={!message.trim()}
                    className="px-6 py-3 bg-[#0a7d95] text-white rounded-lg hover:bg-[#086577] transition disabled:opacity-50 disabled:cursor-not-allowed self-end"
                >
                    <BsSend size={20} />
                </button>
            </div>
        </div>
    );
};

export default ForumInput; 