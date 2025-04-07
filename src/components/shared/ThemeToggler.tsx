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
          variant="outline"
          size="icon"
          className="ml-4 border-none shadow-card-shadow dark:shadow-slate-800 bg-none hover:bg-none hover:outline-none focus-within:outline-none hover:border-none"
        >
          <Sun className="text-3xl rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-400" />
          <Moon className="absolute text-3xl rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-light-primary-text dark:text-dark-primary-txt" />
          {/* <span className="sr-only">Toggle theme</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border text-light-primary-text dark:text-dark-primary-txt dark:shadow-box-shadow-dark font-medium font-Exo"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
