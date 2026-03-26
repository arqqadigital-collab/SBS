const ExpertiseSection = () => (
  <section className="py-24 bg-gray-50 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      
      {/* Text Content - Left */}
      <div className="w-full lg:w-1/2 space-y-6 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-[#003366] leading-tight uppercase">
          Technology Expertise Built Around <span className="text-lime-500">Business Needs</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Through years of experience delivering ERP systems, healthcare technology solutions, and digital transformation services, we collaborate closely with organizations to implement systems that simplify processes, integrate data, and unlock new opportunities for innovation.
        </p>
        <div className="pt-2">
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide text-sm transition-colors shadow-sm">
            Discover Our Approach
          </button>
        </div>
      </div>
      
      {/* Visual - Right */}
      <div className="w-full lg:w-1/2 relative z-10">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[4/3]">
          <img 
            src="https://res.cloudinary.com/dcjufshrh/image/upload/v1772978007/shutterstock_2480023489_qved4l.png" 
            alt="Technology Dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-lime-500 rounded-2xl z-0 hidden md:block"></div>
      </div>

    </div>
  </section>
);

export default ExpertiseSection;
