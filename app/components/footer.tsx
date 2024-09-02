import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className="relative flex-col justify-center gap-4 w-full snap-start snap-always">
      <div className="flex flex-col md:flex-row container justify-between">
        <Link to="/" className="flex items-center justify-center py-4">
          <span className="relative flex items-center justify-center">
            <img
              src="/stroli_logo_icon.svg"
              width={28}
              height={28}
              alt="Logo Icon"
            />
            <img src="/stroli_logo.svg" width={56} height={52} alt="Logo" />
          </span>
        </Link>
        <nav className="flex md:gap-4 items-center justify-center text-sm font-extrabold text-gray-950 uppercase py-6">
          <Link
            to="/privacy-policy"
            target="_blank"
            className="no-underline hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/legal"
            target="_blank"
            className="no-underline hover:underline"
          >
            General Terms of Service
          </Link>
          <Link
            to="/content-guidelines"
            target="_blank"
            className="no-underline hover:underline"
          >
            Content Guidelines
          </Link>
        </nav>
      </div>
      <Separator />
      <small className="block text-center text-xs text-gray-950 font-extrabold uppercase py-6">
        &copy; {new Date().getFullYear()} <b>Stroli Inc.</b> All rights
        reserved.
      </small>
    </footer>
  );
};

export default Footer
