import { useEffect, useState } from "react";
import { getXP } from "../../services/xp/xpService";

export default function XPBadge() {
  const [xp, setXP] = useState(getXP());

  useEffect(() => {
    const updateXP = () => {
      setXP(getXP());
    };

    window.addEventListener("xp-updated", updateXP);

    return () => {
      window.removeEventListener("xp-updated", updateXP);
    };
  }, []);

  return (
    <div className="rounded-xl border border-yellow-500 bg-yellow-500/10 px-4 py-3">
      <p className="text-sm text-yellow-300">
        Total XP
      </p>

      <h2 className="text-2xl font-bold text-yellow-400">
        {xp}
      </h2>
    </div>
  );
}