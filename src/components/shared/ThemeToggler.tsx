import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/Provider/ThemeProvider";

export function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="ml-4 bg-none shadow-none hover:bg-none
      focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
      ring-0 outline-none rounded-xl border-2 border-slate-100 dark:border-gray-900 text-2xl "
        >
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#ffa538]" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-light-primary-text dark:text-dark-primary-txt" />
          {/* <span className="sr-only">Toggle theme</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border text-light-primary-text dark:text-dark-primary-txt dark:shadow-box-shadow-dark font-medium font-Exo rounded-2xl p-2"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer  hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer  hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer  hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
