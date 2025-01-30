'use client';

import Container from "@/app/components/Container";
import Logo from './Logo'
import UserMenu from './UserMenu'
import { SafeUser } from "@/app/types";
import MainMenu from './MainMenu';

interface NavbarProps {
    currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <div className="fixed w-full z-10 shadow-sm bg-white">
            <div className="py-4">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <MainMenu />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;