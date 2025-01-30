'use client';

import { useRouter, usePathname } from "next/navigation";

const MainMenu = () => {
    const router = useRouter();
    const pathname = usePathname();
    
    const menuItems = [
        { label: 'Staking', href: '/staking' },
        { label: 'Marketplace', href: '/marketplace' },
        { label: 'About Us', href: '/about' },
        { label: 'Forum', href: '/forum' },
        { label: 'List Property', href: '/properties/create' },
    ];

    return (
        <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
                <div
                    key={item.label}
                    onClick={() => router.push(item.href)}
                    className="cursor-pointer transition hover:text-gray-600 text-gray-600"
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
}

export default MainMenu; 