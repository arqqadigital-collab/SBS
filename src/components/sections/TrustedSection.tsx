import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const clientLogos = [
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752219/LuxTech_rjuwvl.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752218/Hiroll_xfsrou.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752218/Logo-on-wood_vi5ogu.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752218/Layer_1_q4tkeh.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752217/gest_pgbctj.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/Boss_pnkmjq.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752213/Future_Group_yjy26p.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752213/Eventive_zuiglc.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752213/etal_eg_logo_oaongs.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/Dazzle_Advertising_xe3ede.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/Arab_Medical_uhiqya.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/Debacker_s_n74nwz.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/DSF_yk7rsv.png"
];

const partnerLogos = [
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700401/2024-10-endnote.cropimg.width_700.crop_landscape_zdc3my.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700024/Totara-logo_r11gz0.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700024/Fortinet-Logo.wine_ec3sys.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700024/System_ERP_Microsoft_Dynamics-365-Business-Central_dop6me.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700024/odoo_logo_g6nxc9.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700452/311bbf74dea50aef1086e5ada9793595_flml0p.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700025/zoho-logo-512_1_otlhcu.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700383/96-969957_cerner-logo-png_otd5fq.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1772700025/Imprivata_logo_Colour-800x217_lsc2sx.png"
];

const TrustedSection = () => (
  <section className="pt-24 pb-32 bg-gray-50 overflow-hidden relative">
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
      .animate-marquee {
        animation: marquee 50s linear infinite;
        display: flex;
        flex-wrap: nowrap;
        width: max-content;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 50s linear infinite;
        display: flex;
        flex-wrap: nowrap;
        width: max-content;
      }
      .animate-marquee:hover, .animate-marquee-reverse:hover {
        animation-play-state: paused;
      }
      .logo-track {
        display: flex;
        flex-wrap: nowrap;
        flex-shrink: 0;
        align-items: center;
        gap: 6rem;
        padding: 0 3rem;
      }
      @media (min-width: 768px) {
        .logo-track {
          gap: 8rem;
        }
      }
    `}</style>
    
    <div className="max-w-6xl mx-auto text-center px-6 md:px-16 lg:px-24 mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4 tracking-tight">
        Trusted By <br/>
        <span className="text-lime-500">Leading Organizations</span>
      </h2>
      <p className="text-gray-500 max-w-3xl mx-auto">
        Partnering with enterprises and healthcare institutions to deliver impactful digital transformation solutions across the MENA region and the United States
      </p>
    </div>
    
    <div className="mb-24">
      <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Clients</h3>
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee">
          <div className="logo-track">
            {clientLogos.map((logo, index) => (
              <img 
                key={`logo-1-${index}`} 
                src={logo} 
                alt="Client Logo" 
                className="h-12 md:h-16 w-32 md:w-48 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              />
            ))}
          </div>
          <div className="logo-track">
            {clientLogos.map((logo, index) => (
              <img 
                key={`logo-2-${index}`} 
                src={logo} 
                alt="Client Logo" 
                className="h-12 md:h-16 w-32 md:w-48 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 relative z-20">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-10 md:p-14 flex flex-col md:flex-row justify-around gap-12 text-center border-2 border-lime-500">
        <div>
          <div className="text-5xl md:text-6xl font-extrabold text-[#003366] mb-3 tracking-tight">
            <AnimatedCounter end={200} suffix="+" duration={2500} />
          </div>
          <div className="text-[#005599] font-bold uppercase tracking-wider text-base md:text-lg">Organizations<br/>Transformed</div>
        </div>
        <div className="hidden md:block w-px bg-gray-200"></div>
        <div>
          <div className="text-5xl md:text-6xl font-extrabold text-[#003366] mb-3 tracking-tight">
            <AnimatedCounter end={15} suffix="+" duration={2000} />
          </div>
          <div className="text-[#005599] font-bold uppercase tracking-wider text-base md:text-lg">Industries<br/>Served</div>
        </div>
        <div className="hidden md:block w-px bg-gray-200"></div>
        <div>
          <div className="text-5xl md:text-6xl font-extrabold text-[#003366] mb-3 tracking-tight">
            <AnimatedCounter end={98} suffix="%" duration={2500} />
          </div>
          <div className="text-[#005599] font-bold uppercase tracking-wider text-base md:text-lg">Client Satisfaction<br/>Rate</div>
        </div>
      </div>
    </div>

    <div className="mt-24">
      <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Partners</h3>
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee-reverse">
          <div className="logo-track">
            {partnerLogos.map((logo, index) => (
              <img 
                key={`logo-3-${index}`} 
                src={logo} 
                alt="Partner Logo" 
                className="h-12 md:h-16 w-32 md:w-48 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              />
            ))}
          </div>
          <div className="logo-track">
            {partnerLogos.map((logo, index) => (
              <img 
                key={`logo-4-${index}`} 
                src={logo} 
                alt="Partner Logo" 
                className="h-12 md:h-16 w-32 md:w-48 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrustedSection;
