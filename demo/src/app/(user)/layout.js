import Link from "next/link";

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* User Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              about
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              contact
            </Link>
          </div>
        </nav>
      </header>

      {/* User Content */}
      <main className="container mx-auto px-4 py-8">{children}</main>

      {/* User Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 MyApp.</p>
        </div>
      </footer>
    </div>
  );
}
