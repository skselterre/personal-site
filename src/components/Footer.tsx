import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="px-4 pb-12 pt-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 border-t border-white/10 pt-8 text-sm text-white/40">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
