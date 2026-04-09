import { Search } from 'lucide-react';

const Navbar = () => (
  <nav className="relative flex justify-center items-center py-6 px-6 md:px-16 lg:px-24 text-white z-10 w-full">
    <div className="flex items-center justify-between w-full max-w-7xl">
      <div className="flex-shrink-0 z-20">
        <img 
          src="https://res.cloudinary.com/djxcjlhtn/image/upload/v1775654798/logo_2_r7esef.png" 
          alt="TechSync Logo" 
          className="h-10 md:h-12 lg:h-16 object-contain" 
        />
      </div>

      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
        <a href="#" className="hover:text-lime-400 transition-colors">Products</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Solutions</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Company</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Blog</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Pricing</a>
        <a href="#" className="hover:text-lime-400 transition-colors">Resources</a>

        <button className="p-2 hover:bg-white/10 rounded-full transition-colors ml-2">
          <Search className="w-5 h-5" />
        </button>
      </div>

      <div className="flex md:hidden items-center">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
