export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex items-center justify-center py-6 px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Caminhando Com Jesus. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
