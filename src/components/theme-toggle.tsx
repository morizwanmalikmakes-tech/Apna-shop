import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("kgn-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("kgn-theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted lg:h-8 lg:w-8"
    >
      {dark ? <Sun className="h-4 w-4 lg:h-3.5 lg:w-3.5" /> : <Moon className="h-4 w-4 lg:h-3.5 lg:w-3.5" />}
    </button>
  );
}
