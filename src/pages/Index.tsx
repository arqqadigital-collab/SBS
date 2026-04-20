import Hero from '@/components/sections/Hero';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import TransformSection from '@/components/sections/TransformSection';
import DeliverSection from '@/components/sections/DeliverSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TrustedSection from '@/components/sections/TrustedSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CTABannerSection from '@/components/sections/CTABannerSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

const Index = () => (
  <div className="min-h-screen font-sans text-slate-800 selection:bg-lime-200 selection:text-[#003366]">
    <Hero />
    <ExpertiseSection />
    <TransformSection />
    <DeliverSection />
    <ServicesSection />
    <ProcessSection />
    <TrustedSection />
    <CaseStudiesSection />
    <CTABannerSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
