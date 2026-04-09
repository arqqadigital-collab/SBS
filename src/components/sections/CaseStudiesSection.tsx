import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    quote: "We faced severe challenges with our legacy operational systems and data fragmentation. The team managed a full ERP migration seamlessly, providing us with unified reporting and automated workflows. I highly recommend their expertise for large-scale enterprise deployments.",
    author: "Ahmed Al-Mansoori",
    company: "Global Logistics Corp",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1772978007/shutterstock_2480023489_qved4l.png"
  },
  {
    quote: "Ensuring compliance with DHA standards while modernizing our patient records seemed daunting. Their healthcare transformation framework not only secured our data but enhanced our clinical efficiency by 40%, drastically improving patient outcomes.",
    author: "Dr. Sarah Jenkins",
    company: "Prime Care Hospitals",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1772978013/shutterstock_2556791541_vnzpzq.png"
  },
  {
    quote: "Lacking an internal specialized IT team, we relied completely on their managed services. They now handle our entire cybersecurity posture and infrastructure scaling, allowing us to focus entirely on our core business growth with total peace of mind.",
    author: "Michael Chang",
    company: "FinTech Solutions",
    image: "https://res.cloudinary.com/dcjufshrh/image/upload/v1772978009/shuttterrr_ymbklh.png"
  }
];

const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % cases.length);
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, cases.length]);

  return (
    <section className="py-24 bg-white px-6 md:px-16 lg:px-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto bg-white border-2 border-lime-500 rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-xl relative z-10">
        
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#003366] mb-4 tracking-tight">
            Case Studies
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Real Results from Real Organizations
          </p>
        </div>

        <div 
          className="relative min-h-[550px] md:min-h-[400px] mb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {cases.map((c, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${
                idx === activeIndex ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 pointer-events-none translate-x-8'
              }`}
            >
              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video md:aspect-auto md:h-[350px]">
                <img
                  src={c.image}
                  alt={c.company}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/80 to-transparent mix-blend-multiply"></div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-light">
                  "{c.quote}"
                </p>

                <div>
                  <h4 className="text-[#003366] font-bold text-lg">{c.author}</h4>
                  <p className="text-lime-600 font-medium">{c.company}</p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex gap-3">
                    {cases.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveIndex(dotIdx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          dotIdx === activeIndex ? 'w-10 bg-lime-500' : 'w-6 bg-gray-200 hover:bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all group"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all group"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 border-t border-gray-100 pt-8">
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide text-sm transition-colors shadow-sm">
            View Case Studies
          </button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
