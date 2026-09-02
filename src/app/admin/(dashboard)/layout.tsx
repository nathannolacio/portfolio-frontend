import Link from "next/link";
import { logoutAction } from "../logout/actions";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <nav className="flex items-center gap-6">
          <Link href="/admin/projects" className="font-display text-lg font-medium text-text">
            Admin
          </Link>
          <Link href="/admin/projects" className="text-sm text-text-muted hover:text-text">
            Projects
          </Link>
        </nav>
        <form action={logoutAction}>
          <button type="submit" className="text-sm text-text-muted hover:text-text">
            Log out
          </button>
        </form>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
