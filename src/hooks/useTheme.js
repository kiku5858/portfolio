import { useEffect, useState } from "react";

const KEY = "theme";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved) return saved;
  } catch {
    /* storage unavailable, fall back to system setting */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

// Returns [theme, toggleTheme]. Applies the theme on <html data-theme>.
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}
