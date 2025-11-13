
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import { features } from '../data/featuresData';


const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            About
          </h2>
          <p className="text-gray-400  mx-auto text-3xl text-justify">
            At VyomGarud, our mission is to revolutionize aerial operations through the development of intelligent, mission-ready UAV systems that deliver unmatched precision, reliability, and autonomy. We strive to bridge technology and security by engineering drones that empower defense, surveillance, and industrial sectors with advanced performance and real-time intelligence. Guided by innovation and a commitment to excellence, VyomGarud aims to redefine the future of unmanned flight through smart design, robust engineering, and cutting-edge automation.Our vision is to create a safer, smarter, and more connected world powered by next-generation aerial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
