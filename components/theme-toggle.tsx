"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-9 h-9" />
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid place-items-center w-9 h-9 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
        >
            <Sun className="col-start-1 row-start-1 h-5 w-5 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 opacity-100 dark:opacity-0 text-amber-500" />
            <Moon className="col-start-1 row-start-1 h-5 w-5 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 opacity-0 dark:opacity-100 text-slate-200" />
        </button>
    )
}
