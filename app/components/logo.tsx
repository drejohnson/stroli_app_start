import { Link } from "@tanstack/react-router";

export const Logo = () => {
  return (
    <Link to="/" className="relative flex items-center justify-center">
      <span className="relative w-12">
        <img
          src="/stroli_logo_icon.svg"
          width={64}
          height={64}
          alt="Logo Icon"
        />
      </span>
      <span className="relative hidden md:block w-24">
        <img src="/stroli_logo.svg" width={128} height={64} alt="Logo" />
      </span>
    </Link>
  );
};
