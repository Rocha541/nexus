import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      autoComplete=""
      className={cn(
        "file:text-zinc-900 text-zinc-900 font-serif font-medium placeholder:font-medium placeholder:text-zinc-500 selection:bg-blue-700/90 selection:text-zinc-300 dark:bg-input/30   w-full min-w-0 rounded-lg h-9 border border-green-200 bg-transparent px-3 py-1 text-base shadow-xs autofill:bg-transparent  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-md file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-green-500 ",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
