import { profile } from "@/content/profile";
import FloatingThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="px-4 pb-28 pt-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 border-t border-line pt-8 text-sm text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js</span>
      </div>
      <FloatingThemeToggle />
    </footer>
  );
}
