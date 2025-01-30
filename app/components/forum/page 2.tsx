'use client';

import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import { useState } from "react";
import ForumInput from "@/app/components/forum/ForumInput";
import ForumMessages from "@/app/components/forum/ForumMessages";
import ForumTools from "@/app/components/forum/ForumTools";

const ForumPage = () => {
    const [tokenId, setTokenId] = useState('');
    const [isValidToken, setIsValidToken] = useState(false);

    const handleTokenSubmit = (token: string) => {
        // Here you would validate the token with your backend
        // For now, let's simulate validation
        if (token.length > 0) {
            setIsValidToken(true);
            setTokenId(token);
        }
    };

    return (
        <Container>
            <div className="pt-28">
                <Heading
                    title="Community Forum"
                    subTitle="Connect with other property investors"
                    center
                />
                
                {!isValidToken ? (
                    <ForumInput onSubmit={handleTokenSubmit} />
                ) : (
                    <div className="mt-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <ForumMessages tokenId={tokenId} />
                            <ForumTools />
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default ForumPage;