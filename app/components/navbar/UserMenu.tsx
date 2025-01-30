'use client';

import { useCallback, useState } from "react";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { AiOutlineUser } from 'react-icons/ai';

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ 
    currentUser,
    isDark
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex items-center gap-4">
            {currentUser ? (
                <div className="flex items-center gap-3">
                    <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 cursor-pointer transition hover:text-gray-600"
                    >
                        <div className="h-8 w-8 rounded-full bg-[#0a7d95] flex items-center justify-center">
                            <AiOutlineUser className="text-white" size={20} />
                        </div>
                        <span>{currentUser.name}</span>
                    </div>
                    {isOpen && (
                        <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                            <div className="px-4 py-2 border-b border-gray-100">
                                <p className="text-sm text-gray-500">Signed in as</p>
                                <p className="text-sm font-medium truncate">{currentUser.email}</p>
                            </div>
                            <div 
                                onClick={() => signOut()}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                Sign out
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <div 
                        onClick={loginModal.onOpen}
                        className="cursor-pointer transition hover:text-gray-600"
                    >
                        Log in
                    </div>
                    <div 
                        onClick={registerModal.onOpen}
                        className="cursor-pointer px-4 py-2 rounded-full transition bg-[#0a7d95] text-white hover:bg-[#086577]"
                    >
                        Sign up
                    </div>
                </>
            )}
        </div>
    )
}

export default UserMenu;