'use client';

import { useState } from 'react';
import Container from "@/app/components/Container";
import ForumInput from "@/app/components/forum/ForumInput";
import ForumMessages from "@/app/components/forum/ForumMessages";
import ForumTools from "@/app/components/forum/ForumTools";

const ForumPage = () => {
    const [isJoined, setIsJoined] = useState(false);
    const [tokenId, setTokenId] = useState('');

    const handleJoinForum = () => {
        // Here you would validate the token ID
        if (tokenId.trim()) {
            setIsJoined(true);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Container>
                <div className="pt-32 pb-8">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
                        <p className="text-lg text-gray-500 mt-2">Connect with your property community</p>
                    </div>

                    {!isJoined ? (
                        /* Token ID Input Section */
                        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8">
                            <div className="max-w-md mx-auto">
                                <h2 className="text-xl mb-4 text-gray-900">Join Your Community</h2>
                                <p className="text-gray-500 mb-6">Enter your property token ID to access the forum</p>
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        value={tokenId}
                                        onChange={(e) => setTokenId(e.target.value)}
                                        placeholder="Enter token ID"
                                        className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                                    />
                                    <button
                                        onClick={handleJoinForum}
                                        className="px-6 py-2 bg-[#0a7d95] text-white rounded-lg hover:bg-[#086577] transition"
                                    >
                                        Join Forum
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Forum Content */
                        <div className="space-y-6">
                            <ForumTools />
                            <ForumMessages />
                            <ForumInput />
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default ForumPage; 