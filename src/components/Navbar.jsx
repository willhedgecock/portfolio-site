import { AlignRight, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navItems = [
    { name: 'Home', href: '#hero'},
    { name: 'About Me', href: '#about'},
    { name: 'Projects', href: '#projects'},
    { name: 'Contact', href: '#contact'}
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [stickyClass, setStickyClass] = useState('relative');
    const [isActiveLink, setIsActiveLink] = useState('#hero');
    const navbarRef = useRef(null);

    useEffect(() => {
        const makeNavbarSticky = () => {
            if (navbarRef.current) {
                const navbarHeight = navbarRef.current.offsetHeight;
                const scrollY = window.scrollY;
                scrollY > navbarHeight
                    ? setStickyClass('fixed top-0 left-0 z-50')
                    : setStickyClass('relative');
            } else {
                console.error('Navbar ref is not set');
            }
        };

        window.addEventListener('scroll', makeNavbarSticky);

        return () => {
            window.removeEventListener('scroll', makeNavbarSticky);
        };
    }, []);

    return (
        <nav ref={navbarRef}>
            {/* Desktop Navigation */}
            <div className={`main-nav md:flex justify-between w-full p-5 bg-mint ${stickyClass}`}>
                <div className="logo uppercase">
                    <a href="/"><span className="font-bold text-xl">Will Hedgecock</span> Portfolio</a>
                </div>
                <div className="nav-items flex gap-7 hidden md:flex">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className={`nav-item ${isActiveLink === item.href ? 'active' : ''}`}
                            onClick={() => setIsActiveLink(item.href)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="absolute top-5 right-5 md:hidden">
                    <div className="relative w-6 h-6">
                        <AlignRight
                            className={`absolute top-0 left-0 transform transition-transform duration-300 ease-in-out ${
                                isMobileMenuOpen ? "scale-0" : "scale-100"
                            }`}
                            onClick={() => setIsMobileMenuOpen(true)}
                        />
                        <X
                            className={`absolute top-0 left-0 transform transition-transform duration-300 ease-in-out ${
                                isMobileMenuOpen ? "scale-100" : "scale-0"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                    </div>
                </div>
            </div>
            {/* Mobile Navigation */}
            <div className={`mobile-nav absolute z-200 ${isMobileMenuOpen ? "w-full bg-purple-dark" : "w-0 overflow-hidden" } transition-all duration-300 ease-in md:hidden`}>
                <div className="nav-items flex gap-7 flex flex-col items-center justify-center min-h-screen">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className="nav-item text-white uppercase text-xl" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};