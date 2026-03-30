import Link from "next/link"

export default function Navbar() {

  return (

    <nav className="bg-white shadow-md sticky top-0 z-50 ">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyStore
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/" className="hover:text-blue-600 transition">
            Products
          </Link>


        </div>

       

        {/* Cart */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          🛒 Cart (0)
        </button>

      </div>

    </nav>

  )
}