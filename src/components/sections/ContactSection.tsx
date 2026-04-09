import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this team has completely revolutionized how we operate. Their deep understanding of our industry coupled with their technical expertise allowed us to implement a solution that exceeded our expectations. Our efficiency has increased dramatically, and we are finally leveraging our data effectively.",
    author: "Sarah Jenkins",
    title: "Chief Operations Officer",
    initial: "S"
  },
  {
    quote: "SBS provided an unparalleled ERP integration experience. From the initial consultation to the final deployment, their team was incredibly responsive and proactive. We have seen a 40% reduction in operational bottlenecks since going live.",
    author: "Mark Thompson",
    title: "Chief Technology Officer",
    initial: "M"
  },
  {
    quote: "Their healthcare digital transformation solutions have streamlined our hospital's entire workflow. Ensuring compliance across DHA and regional standards was critical for us, and they handled it with absolute precision.",
    author: "Dr. Emily Chen",
    title: "Hospital Director",
    initial: "E"
  }
];

const ContactSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto relative z-10">
        
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-[2rem] shadow-xl border-2 border-lime-500 flex flex-col lg:flex-row gap-6 md:gap-8">
          
          <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-3 tracking-tight">
              Start Your Next Big Move
            </h2>
            <p className="text-gray-500 mb-10 text-lg">
              We're ready to help with your digital transformation. Get in touch with our experts within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First name</label>
                  <input type="text" placeholder="First name" className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-[#005599] focus:ring-1 focus:ring-[#005599] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last name</label>
                  <input type="text" placeholder="Last name" className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-[#005599] focus:ring-1 focus:ring-[#005599] transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-[#005599] focus:ring-1 focus:ring-[#005599] transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Area of inquiry</label>
                <select defaultValue="" className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-600 focus:outline-none focus:border-[#005599] focus:ring-1 focus:ring-[#005599] transition-all">
                  <option value="" disabled>Select an area...</option>
                  <option value="erp">ERP & Enterprise Systems</option>
                  <option value="healthcare">Healthcare Digital Transformation</option>
                  <option value="tech_services">Technology & Professional Services</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea rows={4} placeholder="Leave us a message..." className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-[#005599] focus:ring-1 focus:ring-[#005599] transition-all"></textarea>
              </div>

              <div className="pt-4">
                <button type="button" className="w-full bg-[#003366] hover:bg-[#002244] text-white font-bold py-3.5 px-8 rounded-lg transition-colors shadow-md">
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 relative rounded-[1.5rem] overflow-hidden min-h-[500px] flex flex-col justify-end p-8 md:p-12">
            
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            >
              <source src="https://res.cloudinary.com/dcjufshrh/video/upload/v1774349854/shutterstock_3797462711_uhxu1d.mov" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#001133] via-[#001133]/60 to-transparent pointer-events-none z-0"></div>

            <div className="relative z-10 w-full h-full flex flex-col justify-end min-h-[350px]">
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className={`absolute bottom-0 left-0 w-full transition-all duration-700 ease-in-out ${
                    idx === activeIndex
                      ? 'translate-x-0 opacity-100 z-10'
                      : 'translate-x-8 opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-light pr-4">
                    {test.quote}
                  </p>

                  <div className="flex items-end justify-between">
                    <div>
                      <h4 className="font-bold text-white text-lg">— {test.author}</h4>
                      <p className="text-blue-200 text-sm">{test.title}</p>
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={prevSlide}
                        className="text-white hover:text-lime-400 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="text-white hover:text-lime-400 transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
