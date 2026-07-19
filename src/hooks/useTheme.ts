import { flushSync } from "react-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Mode = "auto" | "light" | "dark";
type Theme = "light" | "dark";

const DAY_START = 6;  // 6am
const DAY_END = 18;   // 6pm

function timeOfDayTheme(): Theme {
  const hour = new Date().getHours();
  return hour >= DAY_START && hour < DAY_END ? "light" : "dark";
}

function getStoredMode(): Mode {
  const stored = localStorage.getItem("themeMode");
  if (stored === "light" || stored === "dark" || stored === "auto") return stored;
  return "auto";
}

function resolveTheme(mode: Mode): Theme {
  return mode === "auto" ? timeOfDayTheme() : mode;
}

export function useTheme() {
  const [mode, setModeState] = useState<Mode>(getStoredMode);
  const [theme, setTheme] = useState<Theme>(() => resolveTheme(mode));
  const originRef = useRef<{ x: number; y: number } | null>(null);

  // Re-check every minute so auto mode flips live at 6am/6pm without a reload.
  // No animation needed here — it's a passive background check, not a click.
  useEffect(() => {
    if (mode !== "auto") return;
    const id = setInterval(() => setTheme(timeOfDayTheme()), 60_000);
    const onVisible = () => {
      if (document.visibilityState === "visible") setTheme(timeOfDayTheme());
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // useLayoutEffect (not useEffect) is required here: this must commit
  // synchronously so document.startViewTransition() can actually capture
  // the before/after DOM states to animate between. A passive useEffect
  // runs after paint, which is what caused the instant "jitter" snap
  // instead of a real transition.
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (originRef.current) {
      const { x, y } = originRef.current;
      root.style.setProperty("--reveal-x", `${x}px`);
      root.style.setProperty("--reveal-y", `${y}px`);
    }
    root.setAttribute("data-theme", theme);
  }, [theme]);

  function setMode(next: Mode) {
    setModeState(next);
    setTheme(resolveTheme(next));
  }

  function toggle(e?: React.MouseEvent) {
    if (e) {
      originRef.current = { x: e.clientX, y: e.clientY };
    }
    const next: Theme = theme === "dark" ? "light" : "dark";

    const apply = () => {
      flushSync(() => {
        setModeState(next);
        setTheme(next);
      });
    };

    if (document.startViewTransition) {
      document.documentElement.classList.add("theme-transitioning");
      // Force a layout recalculation so the browser registers the class 
      // BEFORE capturing the start state of the view transition.
      window.getComputedStyle(document.documentElement).getPropertyValue('opacity');
      
      const transition = document.startViewTransition(apply);
      transition.finished.finally(() => {
        document.documentElement.classList.remove("theme-transitioning");
      });
    } else {
      apply();
    }
  }

  return { theme, mode, toggle, setMode };
}
