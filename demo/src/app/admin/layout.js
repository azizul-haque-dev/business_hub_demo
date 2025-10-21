import Link from 'next/link'

export default function AdminLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          <Link 
            href="/admin" 
            className="block py-2 px-4 rounded hover:bg-gray-700 transition"
          >
            📊 Dashboard
          </Link>
          <Link 
            href="/admin/users" 
            className="block py-2 px-4 rounded hover:bg-gray-700 transition"
          >
            👥 Users
          </Link>
          <Link 
            href="/admin/posts" 
            className="block py-2 px-4 rounded hover:bg-gray-700 transition"
          >
            📦 Posts
          </Link>
          <Link 
            href="/admin/pengings" 
            className="block py-2 px-4 rounded hover:bg-gray-700 transition"
          >
            Pendings
          </Link>
        </nav>
      </aside>

      {/* Admin Content Area */}
      <div className="flex-1">
        {/* Admin Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Logout
            </button>
          </div>
        </header>

        {/* Admin Main Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}