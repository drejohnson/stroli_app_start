import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Sign in", href: "/auth/sign-in" },
  { title: "Become A Creator", href: "/onboarding/creator" },
];

export const Nav = () => {
  return (
    <nav className="flex justify-between container">
      <Logo />
      <div className="flex items-center justify-between gap-5">
        <Link
          href="/auth/sign-in"
          className="md:flex hidden gap-2 rounded-full bg-transparent border-2 border-gray-50 text-gray-50 text-sm text-center w-fit py-3 px-4 md:py-2 md:px-6 transition-all duration-300 no-underline"
        >
          Sign in
        </Link>
        <Link
          href="/onboarding/creator"
          className="md:flex hidden gap-2 rounded-full bg-gray-50 text-gray-950 text-sm text-center w-fit py-3 px-4 md:py-2 md:px-6 transition-all duration-300 no-underline"
        >
          Become Creator
        </Link>
      </div>
    </nav>
  );
};
