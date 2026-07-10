import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../common/Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-slate-300 transition hover:text-white">
            Home
          </Link>

          <Link
            to="/lessons"
            className="text-slate-300 transition hover:text-white"
          >
            Lessons
          </Link>

          <Link
            to="/practice"
            className="text-slate-300 transition hover:text-white"
          >
            Practice
          </Link>

          <Link
            to="/leaderboard"
            className="text-slate-300 transition hover:text-white"
          >
            Leaderboard
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline">Login</Button>

          <Button>Get Started</Button>
        </div>

        <button className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>
    </header>
  );
}