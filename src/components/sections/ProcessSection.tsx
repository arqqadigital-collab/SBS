import { useState } from 'react';
import { Search, Compass, Layers, Users, Settings } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(5);

  const steps = [
    {
      id: 1,
      title: 'Discovery',
      cardTitle: 'Discovery & assessment',
      duration: 'Weeks 1–2',
      description: 'We begin with a deep-dive into your existing systems, workflows, and pain points. Our consultants meet with key stakeholders across departments to map the full picture before recommending anything.',
      tags: ['Stakeholder interviews', 'System audit', 'Gap analysis', 'Risk mapping'],
      icon: Search
    },
    {
      id: 2,
      title: 'Strategy',
      cardTitle: 'Transformation roadmap',
      duration: 'Weeks 3-4',
      description: 'Based on discovery findings, we build a prioritized roadmap tailored to your goals, budget, and timeline. You receive a clear document with phases, milestones, and expected ROI for each initiative.',
      tags: ['Roadmap document', 'ROI projections', 'Phase priorities', 'Tech selection'],
      icon: Compass
    },
    {
      id: 3,
      title: 'Build',
      cardTitle: 'Implementation & integration',
      duration: 'Weeks 5–14',
      description: 'Our engineers configure, customize, and deploy your chosen platforms — ERP, healthcare IT, or managed services. We work in iterative sprints with weekly progress check-ins so you always know where things stand.',
      tags: ['ERP configuration', 'System integration', 'Data migration', 'Sprint reviews'],
      icon: Layers
    },
    {
      id: 4,
      title: 'Train',
      cardTitle: 'Training & change management',
      duration: 'Weeks 12–16',
      description: 'Technology only works if people use it confidently. We run hands-on training sessions for every user group, and provide change management support to ensure adoption across your organization.',
      tags: ['Role-based training', 'Adoption tracking', 'Documentation', 'Champions program'],
      icon: Users
    },
    {
      id: 5,
      title: 'Optimize',
      cardTitle: 'Ongoing optimization & support',
      duration: 'Month 4 onwards',
      description: "After go-live, we don't disappear. Our team monitors performance, runs quarterly business reviews, and continuously refines your systems as your organization grows and your needs evolve.",
      tags: ['24/7 support', 'Quarterly reviews', 'Performance dashboards', 'Continuous improvement'],
      icon: Settings
    }
  ];

  const currentStep = steps.find(s => s.id === activeStep)!;
  const CurrentIcon = currentStep.icon;

  const handleNext = () => setActiveStep(prev => Math.min(prev + 1, steps.length));
  const handlePrev = () => setActiveStep(prev => Math.max(prev - 1, 1));

  return (
    <section className="py-24 bg-gradient-to-r from-[#005599] to-[#0088cc] px-6 md:px-16 lg:px-24 overflow-hidden text-white font-sans relative">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Your transformation, <br />
            step by step
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Every engagement follows a proven 5-phase process — from discovery to long-term optimization. See what to expect at each stage.
          </p>
        </div>

        <div className="w-full flex justify-center mb-20 relative z-10 px-2 mt-8 md:mt-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full px-4 md:px-8 py-4 flex items-center justify-between w-full max-w-4xl relative">
            {steps.map((step) => {
              const isActive = step.id === activeStep;
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="relative flex justify-center items-center w-16 md:w-24 h-8 md:h-12 group">
                  <button 
                    onClick={() => setActiveStep(step.id)}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-400 ease-out z-10 rounded-2xl
                      ${isActive 
                        ? 'w-20 h-24 md:w-24 md:h-28 scale-105 z-20' 
                        : 'w-10 h-10 md:w-12 md:h-12 hover:w-20 hover:h-24 md:hover:w-24 md:hover:h-28 hover:z-20'}
                    `}
                  >
                    <div className={`absolute inset-0 bg-[#004488]/60 backdrop-blur-lg rounded-2xl border border-blue-300/50 shadow-[0_0_25px_rgba(51,136,255,0.7)] -z-10 transition-all duration-400
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}></div>
                    
                    <Icon 
                      className={`transition-all duration-400 ${
                        isActive ? 'w-7 h-7 md:w-8 md:h-8 text-white mb-1 md:mb-2' : 'w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white group-hover:w-7 group-hover:h-7 md:group-hover:w-8 md:group-hover:h-8 group-hover:mb-1 md:group-hover:mb-2'
                      }`} 
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    
                    <div className={`overflow-hidden transition-all duration-400 flex flex-col items-center ${isActive ? 'h-auto opacity-100 max-h-10 mt-1' : 'max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 group-hover:mt-1'}`}>
                      <span className="text-[11px] md:text-[13px] font-bold text-white tracking-wide text-center leading-tight px-1">
                        {step.title}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl relative overflow-hidden transition-all duration-500">
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10">
            <div className="bg-white/5 border border-white/20 rounded-[1.5rem] w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center shadow-inner">
              <CurrentIcon className="w-10 h-10 md:w-12 md:h-12 text-lime-400" />
            </div>

            <div className="space-y-5 flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{currentStep.cardTitle}</h3>
                <span className="hidden md:inline-block text-white/30 text-xl font-light">|</span>
                <span className="text-lime-400 font-semibold text-lg">{currentStep.duration}</span>
              </div>
              
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-4xl font-medium">
                {currentStep.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {currentStep.tags.map((tag, i) => (
                  <span key={i} className="bg-white/5 border border-white/20 text-lime-400 rounded-full px-5 py-2 text-sm font-bold tracking-wide shadow-sm cursor-default hover:bg-white/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/20">
            <div className="flex gap-4">
              <button 
                onClick={handlePrev}
                disabled={activeStep === 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-transparent transition-colors shadow-sm"
              >
                ← Previous
              </button>
              {activeStep === steps.length ? (
                <button 
                  onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-lime-400 bg-lime-500 text-[#003366] font-bold hover:bg-lime-600 hover:border-lime-500 transition-colors shadow-sm"
                >
                  Start your journey ↗
                </button>
              ) : (
                <button 
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/30 bg-white/10 text-white font-medium hover:bg-white/20 hover:border-white/40 transition-colors shadow-sm"
                >
                  Next phase →
                </button>
              )}
            </div>
            <div className="text-white/90 font-medium text-sm md:text-base">
              Phase {activeStep} of {steps.length}
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div>
            <div className="text-4xl md:text-5xl font-light text-lime-400 mb-2">14 days</div>
            <div className="text-blue-100 text-sm leading-relaxed">avg. time to first discovery<br/>report</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-light text-lime-400 mb-2">98%</div>
            <div className="text-blue-100 text-sm leading-relaxed">of projects delivered on<br/>schedule</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-light text-lime-400 mb-2">200+</div>
            <div className="text-blue-100 text-sm leading-relaxed">organizations transformed</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
