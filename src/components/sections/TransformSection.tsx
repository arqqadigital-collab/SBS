import { useState, useEffect, useRef } from 'react';
import { 
  Layers, Activity, BarChart3, Network,
  ClipboardList, MonitorPlay, HeartPulse, CreditCard,
  BrainCircuit, ShieldCheck, UserPlus, Plug
} from 'lucide-react';

interface TabCapability {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TabContent {
  title: string;
  description: string;
  capabilities: TabCapability[];
  cta: string;
  video: string;
}

const tabData: Record<string, TabContent> = {
  'ERP & Enterprise Systems': {
    title: 'Power Your Business with Scalable ERP Ecosystems',
    description: 'Our ERP Ecosystem features top-tier platforms including Odoo ERP Solutions, Microsoft Dynamics 365 (Business Central & CE), and Zoho Business Applications.',
    capabilities: [
      { text: 'ERP implementation & customization', icon: Layers },
      { text: 'Financial & operational automation', icon: Activity },
      { text: 'Real-time reporting & analytics', icon: BarChart3 },
      { text: 'Process optimization & system integration', icon: Network }
    ],
    cta: 'Explore ERP Solutions',
    video: 'https://res.cloudinary.com/dcjufshrh/video/upload/v1772451941/shutterstock_3425051791_dwov9w.mov'
  },
  'Healthcare Digital Transformation': {
    title: 'Healthcare Digital Transformation',
    description: 'Enhance patient care and streamline operations with our advanced healthcare technology solutions. We integrate data securely to provide actionable insights.',
    capabilities: [
      { text: 'Comprehensive Electronic Health Records', icon: ClipboardList },
      { text: 'Secure Telemedicine Platforms', icon: MonitorPlay },
      { text: 'Predictive Analytics for Patient Care', icon: HeartPulse },
      { text: 'Streamlined Billing Systems', icon: CreditCard }
    ],
    cta: 'Discover Healthcare Solutions',
    video: 'https://res.cloudinary.com/dcjufshrh/video/upload/v1772451936/shutterstock_3813448213_sycqnq.mov'
  },
  'Technology & Professional Services': {
    title: 'Expert Support That Powers Successful Transformation',
    description: 'Leverage our specialized expertise and regional compliance knowledge to ensure your transformation projects are delivered securely, efficiently, and to the highest standards.',
    capabilities: [
      { text: 'AI Healthcare Transformation Consulting', icon: BrainCircuit },
      { text: 'Compliance with DHA, DoH, ADHICS, and regional healthcare standards', icon: ShieldCheck },
      { text: 'Staff Augmentation & Managed Services', icon: UserPlus },
      { text: 'Implementation and Integration services', icon: Plug }
    ],
    cta: 'Explore Technology Services',
    video: 'https://res.cloudinary.com/dcjufshrh/video/upload/v1772451931/shutterstock_3495967415_jh6uja.mov'
  }
};

const TransformSection = () => {
  const [activeTab, setActiveTab] = useState('ERP & Enterprise Systems');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const tabs = Object.keys(tabData);
  const currentContent = tabData[activeTab];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }
          const { top, height } = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (top <= windowHeight && top + height >= 0) {
            const scrollableDistance = height - windowHeight;
            if (scrollableDistance > 0) {
              let progress = -top / scrollableDistance;
              progress = Math.max(0, Math.min(1, progress));
              const index = Math.min(tabs.length - 1, Math.floor(progress * tabs.length));
              setActiveTab(prevTab => {
                const newTab = tabs[index];
                return prevTab !== newTab ? newTab : prevTab;
              });
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  const handleTabClick = (tabName: string) => {
    const index = tabs.indexOf(tabName);
    if (!sectionRef.current) return;
    const { top } = sectionRef.current.getBoundingClientRect();
    const height = sectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollableDistance = height - windowHeight;
    
    if (scrollableDistance > 0) {
      const targetScrollY = window.scrollY + top + (index / tabs.length) * scrollableDistance + 10;
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={sectionRef} className="relative h-[200vh] bg-white mt-24 lg:mt-32 mb-32 md:mb-48">
      <div className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden py-8 md:py-12 z-10">
        <section className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto text-center w-full">
          <style>{`
            @keyframes slideInLeft {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes slideInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-slide-left {
              animation: slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              opacity: 0;
            }
            .animate-slide-up {
              animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              opacity: 0;
            }
          `}</style>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4 tracking-tight">
            How We Transform <span className="text-lime-500">Your Business</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Our solutions combine technology, automation, and industry expertise to help organizations modernize operations and accelerate digital growth.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-[#003366] text-white shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-12 text-left items-center min-h-[400px]">
            <div key={`text-${activeTab}`} className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#003366] animate-slide-left leading-snug" style={{ animationDelay: '0ms' }}>
                <span className="bg-lime-200/80 px-3 py-1.5 rounded-lg border-l-4 border-lime-500 inline-block shadow-sm">
                  {currentContent.title}
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed animate-slide-left" style={{ animationDelay: '100ms' }}>
                {currentContent.description}
              </p>
              <ul className="space-y-4 pt-2">
                {currentContent.capabilities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li 
                      key={idx} 
                      className="flex items-start gap-4 text-gray-700 animate-slide-up group"
                      style={{ animationDelay: `${200 + (idx * 150)}ms` }}
                    >
                      <div className="p-1.5 bg-lime-50 rounded-lg group-hover:bg-lime-100 transition-colors">
                        <Icon className="w-6 h-6 text-lime-500 flex-shrink-0" />
                      </div>
                      <span className="mt-1 font-medium">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
                <button className="mt-4 bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide text-sm transition-colors shadow-sm">
                  {currentContent.cta}
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-xl h-64 md:h-96 order-1 md:order-2">
              <video 
                key={`vid-${currentContent.video}`} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ animation: 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
              >
                <source src={currentContent.video} />
              </video>
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransformSection;
