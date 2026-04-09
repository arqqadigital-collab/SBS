import { useState } from 'react';

const services = [
  {
    id: 0,
    category: "SERVICES",
    titleHighlight: "Healthcare",
    titleRest: "Compliance",
    description: "Ensure your operations strictly adhere to DHA, DoH, ADHICS, and regional healthcare standards.",
    author: "TechSync Solutions",
    bgImage: "https://res.cloudinary.com/djxcjlhtn/image/upload/v1775730426/shutterstock_1884612574_sctjon.jpg"
  },
  {
    id: 1,
    category: "SERVICES",
    titleHighlight: "ERP Implementation",
    titleRest: "& Optimization",
    description: "Tailored deployment and continuous enhancement of enterprise systems to streamline your operations.",
    author: "TechSync Solutions",
    bgImage: "https://res.cloudinary.com/djxcjlhtn/image/upload/v1775727056/shutterstock_2594827187_cbbkvf.jpg"
  },
  {
    id: 2,
    category: "SERVICES",
    titleHighlight: "AI Healthcare",
    titleRest: "Transformation",
    description: "Leverage artificial intelligence to optimize clinical workflows and drive medical innovation.",
    author: "TechSync Solutions",
    bgImage: "https://res.cloudinary.com/djxcjlhtn/image/upload/v1775726599/Screen_Shot_2026-04-09_at_11.19.06_AM_flz7iu.png"
  },
  {
    id: 3,
    category: "SERVICES",
    titleHighlight: "Staff Augmentation",
    titleRest: "& Managed Services",
    description: "Scale your teams rapidly with specialized IT professionals and comprehensive managed support solutions.",
    author: "TechSync Solutions",
    bgImage: "https://res.cloudinary.com/djxcjlhtn/image/upload/v1775662938/Screen_Shot_2026-04-08_at_5.42.08_PM_r9fl0p.png"
  },
  {
    id: 4,
    category: "SERVICES",
    titleHighlight: "Implementation",
    titleRest: "& Integration",
    description: "Seamlessly connect disparate systems to create a unified, data-driven technological ecosystem.",
    author: "TechSync Solutions",
    bgImage: "https://res.cloudinary.com/djxcjlhtn/image/upload/v1775729948/shutterstock_568968850_ap5mha.jpg"
  }
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[80vh] min-h-[700px] max-h-[900px] bg-black overflow-hidden font-sans">
      
      {services.map((svc, idx) => (
        <div
          key={svc.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img src={svc.bgImage} alt={svc.titleHighlight} className="w-full h-full object-cover" />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#001122]/90 via-[#001122]/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none"></div>

      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 w-full md:w-2/3 lg:w-1/2">
        {services.map((svc, idx) => (
          <div
            key={svc.id}
            className={`transition-all duration-700 absolute top-1/2 left-6 md:left-16 lg:left-24 right-6 md:right-0 ${
              idx === activeIndex 
                ? 'opacity-100 translate-y-[-50%]' 
                : 'opacity-0 translate-y-[-40%] pointer-events-none'
            }`}
          >
            <div className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase mb-4">
              {svc.category}
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              <span className="text-white">{svc.titleHighlight}</span> {svc.titleRest}
            </h2>
            
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl font-medium drop-shadow-md">
              {svc.description}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-0 w-full px-6 md:px-16 lg:px-24 z-30">
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-48 md:w-64 h-28 md:h-36 shrink-0 cursor-pointer snap-start transition-all duration-300 overflow-hidden bg-gray-900 ${
                idx === activeIndex
                  ? 'border-[3px] border-[#005599] shadow-[0_0_25px_rgba(0,85,153,0.6)] transform scale-105'
                  : 'border-[3px] border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={svc.bgImage} alt={svc.titleHighlight} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs md:text-sm font-semibold leading-snug drop-shadow-lg">
                {svc.titleHighlight} {svc.titleRest}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
