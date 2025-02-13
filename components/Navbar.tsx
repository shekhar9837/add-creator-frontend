import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50  backdrop-blur-lg border-b border-white/10">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <div className="font-bold text-xl text-white">😘</div>
      <div className="flex gap-8">
        {["Solutions", "Features", "Pricing"].map((item) => (
          <button key={item} className="text-gray-300 hover:text-white transition-colors">
            {item}
          </button>
        ))}
        <div>


        <button className="px-4 py-2 text-white">
          Sign in
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
          Get Started
        </button>
        </div>
      </div>
    </div>
  </nav>
)
}

export default Navbar