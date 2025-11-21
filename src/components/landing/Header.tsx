import { Button } from "@/components/ui/button";
import { BookHeart } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <BookHeart className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">
            Caminhando Com Jesus
          </span>
        </a>
        <Button asChild>
          <a href="#cta">Quero o Devocional</a>
        </Button>
      </div>
    </header>
  );
}
