'use client';

import { useState } from 'react';
import { BsCalculator, BsEmojiSmile } from 'react-icons/bs';
import { BiPoll } from 'react-icons/bi';

const ForumTools = () => {
    const [showCalculator, setShowCalculator] = useState(false);
    const [showPoll, setShowPoll] = useState(false);

    return (
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
            <div className="flex items-center gap-6">
                <button
                    onClick={() => setShowCalculator(!showCalculator)}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
                >
                    <BsCalculator size={20} />
                    <span>Calculator</span>
                </button>
                <button
                    onClick={() => setShowPoll(!showPoll)}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
                >
                    <BiPoll size={20} />
                    <span>Create Poll</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                    <BsEmojiSmile size={20} />
                    <span>Emoji</span>
                </button>
            </div>

            {showCalculator && (
                <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <h3 className="text-lg mb-4 text-gray-900">Real Estate Calculator</h3>
                    {/* Add calculator components here */}
                </div>
            )}

            {showPoll && (
                <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <h3 className="text-lg mb-4 text-gray-900">Create Poll</h3>
                    <input
                        type="text"
                        placeholder="Poll question"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4 text-gray-900"
                    />
                    <div className="space-y-2">
                        <input
                            type="text"
                            placeholder="Option 1"
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                        />
                        <input
                            type="text"
                            placeholder="Option 2"
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                        />
                    </div>
                    <button className="mt-4 px-6 py-2 bg-[#0a7d95] text-white rounded-lg hover:bg-[#086577] transition">
                        Create Poll
                    </button>
                </div>
            )}
        </div>
    );
};

export default ForumTools; 