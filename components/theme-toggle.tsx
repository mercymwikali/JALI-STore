"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
// import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className="material-symbols-outlined absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
        dark_mode
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
      {/* <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
