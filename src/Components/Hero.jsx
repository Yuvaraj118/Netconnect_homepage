import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
              Network Solutions for the Modern Enterprise
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-lg">
              Secure, scalable, and reliable networking infrastructure to power your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white rounded-full font-medium transition-all flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Network Infrastructure" 
              className="rounded-lg shadow-2xl max-w-full h-auto object-cover animate-fadeInUp"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
