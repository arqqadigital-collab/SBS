import { useState, useEffect, useRef } from 'react';
import { Layers, BrainCircuit, ShieldCheck, UserPlus, Network, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "ERP Implementation & Optimization",
    description: "Tailored deployment and continuous enhancement of enterprise systems to streamline your operations.",
    icon: Layers,
    color: "text-[#005599]",
    bg: "bg-blue-50",
    bar: "bg-[#005599]"
  },
  {
    title: "AI Healthcare Transformation",
    description: "Leverage artificial intelligence to optimize clinical workflows and drive medical innovation.",
    icon: BrainCircuit,
    color: "text-lime-600",
    bg: "bg-lime-50",
    bar: "bg-lime-500"
  },
  {
    title: "Healthcare Compliance",
    description: "Ensure your operations strictly adhere to DHA, DoH, ADHICS, and regional healthcare standards.",
    icon: ShieldCheck,
    color: "text-[#003366]",
    bg: "bg-slate-50",
    bar: "bg-[#003366]"
  },
  {
    title: "Staff Augmentation & Managed Services",
    description: "Scale your teams rapidly with specialized IT professionals and comprehensive managed support solutions.",
    icon: UserPlus,
    color: "text-lime-600",
    bg: "bg-lime-50",
    bar: "bg-lime-500"
  },
  {
    title: "Implementation & Integration",
    description: "Seamlessly connect disparate systems to create a unified, data-driven technological ecosystem.",
    icon: Network,
    color: "text-[#005599]",
    bg: "bg-blue-50",
    bar: "bg-[#005599]"
  }
];

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
      if (firstCard) {
        const scrollAmount = firstCard.offsetWidth + 24;
        scrollRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
        if (firstCard) {
          const scrollAmount = firstCard.offsetWidth + 24;
          const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

          if (scrollRef.current.scrollLeft >= maxScrollLeft - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-24 bg-white border-b border-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas text-[#003366] mb-4 uppercase">
            Our <span className="text-lime-500">Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-4">
            We deliver structured, execution-focused services that help healthcare and enterprise organizations operate with clarity, compliance, and control.
          </p>
        </div>

        <div 
          className="relative w-full md:px-12 lg:px-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full border border-gray-200 hover:border-[#003366] hover:text-[#003366] text-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#003366]/20 shadow-md"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8 pt-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          >
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] snap-start flex flex-col relative group bg-white border-2 border-lime-500 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl ${svc.bg} transition-transform group-hover:-translate-y-1 duration-300 shadow-sm`}>
                    <svc.icon className={`w-8 h-8 ${svc.color}`} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative pl-4 mb-4">
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 ${svc.bar} rounded-r`}></div>
                  <h3 className="text-2xl font-bebas text-gray-900 leading-snug pr-2 uppercase">
                    {svc.title}
                  </h3>
                </div>

                <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                  {svc.description}
                </p>

                <div className="mt-auto">
                  <button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide text-sm transition-colors shadow-sm">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full border border-gray-200 hover:border-[#003366] hover:text-[#003366] text-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#003366]/20 shadow-md"
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex md:hidden justify-center gap-4 mt-2">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors shadow-sm bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors shadow-sm bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
