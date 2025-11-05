'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/guestion', label: 'question' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-red-900/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-gray-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text text-transparent">
              Waranya
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-red-600 to-gray-800 text-white shadow-lg shadow-red-900/50'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-red-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-red-600 to-gray-800 text-white shadow-lg shadow-red-900/50'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-red-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}