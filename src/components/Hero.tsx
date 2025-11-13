
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Command the Skies</span> with Precision & Power
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Discover next-generation drone systems built for defense, surveillance, and unmatched aerial performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-700 text-white px-8 py-6">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              <img 
                src="src/data/drone-flying.jpg"
                alt="Trading platform dashboard" 
                className="rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
