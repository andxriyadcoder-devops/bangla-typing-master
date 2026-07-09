import { Menu } from "lucide-react";
import Button from "../ui/Button";
import Logo from "../common/Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-slate-300 hover:text-white">
            Home
          </a>

          <a href="#" className="text-slate-300 hover:text-white">
            Lessons
          </a>

          <a href="#" className="text-slate-300 hover:text-white">
            Practice
          </a>

          <a href="#" className="text-slate-300 hover:text-white">
            Leaderboard
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>

        <button className="md:hidden">
          <Menu />
        </button>

      </div>
    </header>
  );
}