const Footer = () => (
  <footer className="bg-[#1a4b8c] text-blue-100 py-16 px-6 md:px-16 lg:px-24 border-t-[16px] border-[#003366]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      
      <div className="space-y-4 lg:col-span-1">
        <div className="mb-6">
          <img 
            src="https://res.cloudinary.com/dcjufshrh/image/upload/v1771751101/Logo_aia3du.png" 
            alt="TechSync Logo" 
            className="h-16 object-contain" 
          />
        </div>
        <p className="text-sm leading-relaxed text-blue-200">
          Empowering businesses with next-generation technology solutions. We turn complex challenges into clear, actionable digital strategies.
        </p>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Solutions</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Digital Strategy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Company</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Support Portal</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Sales Inquiry</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Media Resources</a></li>
        </ul>
      </div>

    </div>
    
    <div className="max-w-7xl mx-auto pt-8 border-t border-blue-800 text-center text-xs text-blue-300">
      © {new Date().getFullYear()} TechSync. All rights reserved.
    </div>
  </footer>
);

export default Footer;
