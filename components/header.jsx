'use client';
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
    {
        linkText: 'Portfolio',
        href: '/portfolio',
        dropdown: [
            { linkText: 'Portraits', href: '/portfolio/portraits' }
        ]
    },
    { linkText: 'Exhibitions', href: '/exhibitions' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Contact', href: '/contact' }
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <header className="relative">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center px-8 py-8 space-x-16">
                <Link href="/" className="text-xl font-light tracking-wider">
                    ELINA EVSTIG
                </Link>

                <ul className="flex items-center space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group">
                            {item.dropdown ? (
                                <div
                                    className="relative"
                                    onMouseEnter={() => setOpenDropdown(index)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button
                                        className="text-sm hover:text-gray-600 transition-colors"
                                    >
                                        {item.linkText}
                                    </button>
                                    {openDropdown === index && (
                                        <div
                                            className="absolute top-full left-0 pt-2 z-50"
                                        >
                                            <div className="bg-white shadow-lg border border-gray-100 min-w-48">
                                                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                    <Link
                                                        key={dropdownIndex}
                                                        href={dropdownItem.href}
                                                        className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                                                    >
                                                        {dropdownItem.linkText}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-sm hover:text-gray-600 transition-colors"
                                >
                                    {item.linkText}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className="md:hidden flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-lg font-light tracking-wider">
                    ELINA EVSTIG
                </Link>

                <button
                    onClick={toggleMobileMenu}
                    className="flex flex-col space-y-1 p-2"
                    aria-label="Toggle menu"
                >
                    <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
                    <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
                    <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 md:hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <Link href="/" className="text-lg font-light tracking-wider">
                            ELINA EVSTIG
                        </Link>

                        <button
                            onClick={toggleMobileMenu}
                            className="p-2"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="px-6 py-8">
                        <ul className="space-y-8">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-2xl font-light hover:text-gray-600 transition-colors block"
                                        onClick={toggleMobileMenu}
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}
