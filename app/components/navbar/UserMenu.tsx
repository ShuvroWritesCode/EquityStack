'use client';

import { useCallback } from "react";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ 
    currentUser,
    isDark
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    return (
        <div className="flex items-center gap-4">
            {currentUser ? (
                <div 
                    onClick={() => signOut()}
                    className={`cursor-pointer transition ${isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}
                >
                    Logout
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