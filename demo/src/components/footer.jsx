export default function Footer(){
    return(     <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-4">About Us</h3>
              <p className="text-gray-300 text-sm">
                We are a blogging platform where quality content is shared on various topics.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-purple-400 transition text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-purple-400 transition text-sm">About</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-purple-400 transition text-sm">Blog</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-purple-400 transition text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-4">Contact</h3>
              <p className="text-gray-300 text-sm mb-2">Email: info@myblog.com</p>
              <p className="text-gray-300 text-sm mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-300 text-sm">New York, USA</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2025 My Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>)
  
}