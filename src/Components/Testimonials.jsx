import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, company, rating }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">{role}, {company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "NetConnect transformed our network infrastructure, resulting in improved performance and reduced downtime. Their team was professional and responsive throughout the entire process.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechVision Inc.",
      rating: 5
    },
    {
      quote: "We've been working with NetConnect for over 3 years now, and they've consistently delivered exceptional service. Their network security solutions have kept our data safe and our systems running smoothly.",
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Enterprises",
      rating: 5
    },
    {
      quote: "After struggling with network reliability issues for months, we brought in NetConnect. They quickly identified the problems and implemented effective solutions that have dramatically improved our connectivity.",
      name: "Jessica Williams",
      role: "Operations Manager",
      company: "Innovate Solutions",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in delivering exceptional network solutions that meet our clients' needs.
            Here's what some of them have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
