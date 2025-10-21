export default function Navbar(){
    return(
           <nav className="bg-gradient-to-r from-purple-600 to-purple-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-white text-2xl font-bold">My Blog</div>
            <ul className="flex space-x-8">
              <li><a href="#home" className="text-white hover:text-purple-200 transition">Home</a></li>
              <li><a href="#about" className="text-white hover:text-purple-200 transition">About</a></li>
              <li><a href="#blog" className="text-white hover:text-purple-200 transition">Blog</a></li>
              <li><a href="#contact" className="text-white hover:text-purple-200 transition">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}