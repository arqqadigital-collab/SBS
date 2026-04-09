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

    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative z-10">
      <div className="lg:w-[45%] space-y-8">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          What We <br/>
          <span className="text-lime-400">Deliver To You</span>
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

      <div className="lg:w-[55%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {deliverItems.map((item, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col items-start hover:bg-white/15 transition-all cursor-default h-full">
            <div className="p-3 bg-white/10 rounded-xl shrink-0 shadow-inner mb-4">
              <item.icon className="w-7 h-7 text-lime-400" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-wide mb-2">{item.title}</h3>
              <p className="text-blue-50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverSection;
