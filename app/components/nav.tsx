import React, { useState } from 'react';
import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { X, Menu } from 'lucide-react';

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Sign in", href: "/auth/sign-in" },
  { title: "Become A Creator", href: "/onboarding/creator" },
];

export const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center container py-4">
      <Logo />
      <div className="hidden md:flex items-center justify-between gap-5">
        <Link
          href="/auth/sign-in"
          className="rounded-full bg-transparent border-2 border-gray-50 text-gray-50 text-center w-fit py-3 px-4 md:py-2 md:px-6 transition-all duration-300 no-underline"
        >
          Sign in
        </Link>
        <Link
          href="/onboarding/creator"
          className="rounded-full bg-gray-50 text-gray-950 text-center w-fit py-3 px-4 md:py-2 md:px-6 transition-all duration-300 no-underline"
        >
          Become Creator
        </Link>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden z-50 relative focus:outline-none"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X size={48} className="text-white" />
        ) : (
          <Menu size={48} className="text-white" />
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-0 bg-gradient-to-r from-cyan-500 to-sky-400 h-screen pt-24 flex flex-col items-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-50 text-2xl font-extrabold uppercase no-underline mb-6 hover:text-gray-200 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
