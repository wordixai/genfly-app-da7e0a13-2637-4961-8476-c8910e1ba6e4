import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-background px-6 py-4 border-b">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-foreground">OpenRouter</div>
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="w-64 pl-10"
          />
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <a href="/models" className="text-sm text-muted-foreground hover:text-foreground">
          Models
        </a>
        <a href="/chat" className="text-sm text-muted-foreground hover:text-foreground">
          Chat
        </a>
        <a href="/rankings" className="text-sm text-muted-foreground hover:text-foreground">
          Rankings
        </a>
        <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
          Docs
        </a>
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </nav>
    </header>
  );
}