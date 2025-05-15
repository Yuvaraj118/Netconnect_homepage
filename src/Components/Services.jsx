import React from 'react';
import { Wifi, Shield, Server, Cloud, Layers, GitBranch } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Network Design",
      description: "Custom-designed networks tailored to your business needs with scalability and performance in mind."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Network Security",
      description: "Comprehensive security solutions to protect your network from threats and vulnerabilities."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure Management",
      description: "24/7 monitoring and management of your network infrastructure to ensure optimal performance."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Integration",
      description: "Seamless integration of cloud services with your existing network infrastructure."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Software-Defined Networking",
      description: "Modern SDN solutions for more flexible, efficient, and secure network management."
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Network Automation",
      description: "Automate network operations to reduce manual tasks and improve efficiency."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Network Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of networking services to help your business stay connected, secure, and efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
