import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    "Industry-leading network solutions",
    "24/7 technical support",
    "99.9% uptime guarantee",
    "Certified networking professionals",
    "Scalable infrastructure",
    "Customized solutions for your business"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Network Operations Center" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About NetConnect</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2015, NetConnect has been at the forefront of network technology, 
              providing innovative solutions to businesses of all sizes. Our mission is to 
              deliver reliable, secure, and high-performance network infrastructure that 
              empowers businesses to focus on their core operations.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With a team of certified networking professionals and a customer-centric approach, 
              we've helped hundreds of businesses optimize their network performance, enhance 
              security, and reduce operational costs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all inline-block"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
