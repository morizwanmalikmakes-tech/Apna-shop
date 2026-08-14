import { useEffect, useState } from "react";
import { Flag, Moon, Sun } from "lucide-react";

type Theme = "light" | "dark" | "tiranga";

const themeOrder: Theme[] = ["light", "dark", "tiranga"];

function applyDocumentTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("tiranga-theme", theme === "tiranga");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("kgn-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    let initialTheme: Theme;

    if (
      stored === "light" ||
      stored === "dark" ||
      stored === "tiranga"
    ) {
      initialTheme = stored;
    } else {
      initialTheme = prefersDark ? "dark" : "light";
    }

    setTheme(initialTheme);
    applyDocumentTheme(initialTheme);
  }, []);

  const currentIndex = themeOrder.indexOf(theme);
  const nextTheme = themeOrder[
    (currentIndex + 1) % themeOrder.length
  ];

  const toggle = () => {
    setTheme(nextTheme);
    applyDocumentTheme(nextTheme);
    localStorage.setItem("kgn-theme", nextTheme);
  };

  const nextIcon =
    nextTheme === "dark" ? (
      <Moon className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
    ) : nextTheme === "tiranga" ? (
      <Flag className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
    ) : (
      <Sun className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
    );

  return (
    <button
      type="button"
      aria-label={`Current ${theme} theme. Switch to ${nextTheme} theme`}
      title={`Current: ${theme}. Next: ${nextTheme}`}
      onClick={toggle}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted lg:h-8 lg:w-8"
    >
      {nextIcon}
    </button>
  );
}
