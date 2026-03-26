import { Clock, Users, Lightbulb, Cpu, Compass, TrendingUp } from 'lucide-react';

const deliverItems = [
  { icon: Clock, title: "On-Time, Precise Delivery", desc: "Keeping your projects on schedule and aligned with goals." },
  { icon: Users, title: "Strategic Collaboration", desc: "Partnering closely with leadership for seamless execution." },
  { icon: Lightbulb, title: "Insight-Driven Solutions", desc: "Leveraging data to drive smarter business decisions." },
  { icon: Cpu, title: "Process Automation", desc: "Streamlining operations to boost efficiency and reduce risk." },
  { icon: Compass, title: "Expert Guidance", desc: "Providing trusted advice to navigate complex challenges." },
  { icon: TrendingUp, title: "Sustainable Growth Focus", desc: "Building solutions that scale with your business." }
];

const DeliverSection = () => (
  <section className="py-24 bg-gradient-to-r from-[#005599] to-[#0088cc] px-6 md:px-16 lg:px-24 text-white relative overflow-hidden">
     <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 transform skew-x-12 translate-x-1/4 pointer-events-none"></div>

     <style>{`
      .deliver-scroll::-webkit-scrollbar { width: 6px; }
      .deliver-scroll::-webkit-scrollbar-track { background: transparent; }
      .deliver-scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
      .deliver-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.4); }
    `}</style>

    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
      <div className="lg:w-1/2 space-y-8 z-10 sticky top-24">
        <h2 className="text-5xl md:text-6xl font-bebas leading-tight uppercase">
          What We <br/>
          <span className="text-lime-400">Deliver to You</span>
        </h2>
        <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
          Our commitment to excellence is reflected in these core promises, ensuring your digital transformation journey is seamless, impactful, and aligned with your strategic goals.
        </p>
        
        <div className="flex gap-8 md:gap-12 pt-4 border-t border-blue-400/30">
          <div className="flex-1">
            <div className="text-3xl font-bold text-lime-400 mb-1">100%</div>
            <div className="text-sm text-blue-100 font-bold mb-2">Client Satisfaction</div>
            <p className="text-xs text-blue-200 leading-relaxed">We prioritize your success and deliver solutions that exceed expectations.</p>
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold text-lime-400 mb-1">24/7</div>
            <div className="text-sm text-blue-100 font-bold mb-2">Dedicated Support</div>
            <p className="text-xs text-blue-200 leading-relaxed">Reliable, around-the-clock assistance to keep your operations running smoothly.</p>
          </div>
        </div>

        <p className="text-white font-medium pt-4 text-lg border-t border-blue-400/30">
          Our promise to deliver measurable digital transformation through:
        </p>
      </div>

      <div className="lg:w-1/2 space-y-4 w-full z-10 max-h-[500px] overflow-y-auto pr-3 deliver-scroll">
        {deliverItems.map((item, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex gap-6 items-start hover:bg-white/20 transition-all cursor-default group">
            <div className="p-3 bg-white/10 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
              <item.icon className="w-8 h-8 text-lime-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bebas mb-2 uppercase">{item.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverSection;
