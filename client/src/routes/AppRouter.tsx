import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PracticePage from "../pages/PracticePage";

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <h1 className="text-5xl font-bold">{title} (Coming Soon)</h1>
    </div>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route
        path="/lessons"
        element={<ComingSoon title="Lessons" />}
      />
      <Route
        path="/leaderboard"
        element={<ComingSoon title="Leaderboard" />}
      />
    </Routes>
  );
}