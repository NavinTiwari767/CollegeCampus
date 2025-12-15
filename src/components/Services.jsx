import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const services = [
  {
    title: "Email Marketing",
    description:
      "Reach your customers directly with impactful and personalized email campaigns that drive engagement and conversions.",
    icon: "📧",
    details: "Our email marketing service includes strategy development, template design, A/B testing, and performance analytics to maximize your ROI."
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience with high-quality blogs, articles, and copywriting designed to build trust and authority.",
    icon: "✍️",
    details: "We create SEO-optimized content that ranks well on search engines and resonates with your target audience across various platforms."
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive, and scalable websites tailored to your brand and business needs.",
    icon: "💻",
    details: "From simple landing pages to complex web applications, we build fast, secure, and mobile-friendly websites using the latest technologies."
  },
  {
    title: "Mobile Development",
    description:
      "Custom mobile apps for iOS and Android that deliver seamless user experiences and business value.",
    icon: "📱",
    details: "We develop native and cross-platform mobile applications with intuitive UI/UX, robust functionality, and seamless performance."
  },
  {
    title: "UX / UI Design",
    description:
      "Beautiful, intuitive, and user-friendly designs that create lasting impressions for your brand.",
    icon: "🎨",
    details: "Our design process focuses on user research, wireframing, prototyping, and creating visually appealing interfaces that enhance user experience."
  },
  {
    title: "Generative AI Development",
    description:
      "Leverage the power of AI to automate tasks, generate creative content, and build intelligent business solutions.",
    icon: "🤖",
    details: "We develop custom AI solutions including chatbots, content generation systems, predictive analytics, and process automation tools."
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleRequestService = () => {
    // Close modal and navigate to form
    setSelectedService(null);
    navigate("/form");
  };

  return (
    <div id="services" className="min-h-screen bg-black text-white px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4">
          We offer a comprehensive range of digital services to help your business grow and succeed in the digital landscape.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 shadow-lg border border-purple-600/20 hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {service.description}
                </p>
                <span className="text-purple-400 mt-4 block font-medium group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div 
            className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 p-4 md:p-6"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 rounded-2xl max-w-lg w-full relative max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
                aria-label="Close"
              >
                &times;
              </button>
              
              <div className="text-4xl mb-4">{selectedService.icon}</div>
              
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                {selectedService.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {selectedService.description}
              </p>
              
              <p className="text-gray-300">
                {selectedService.details}
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-2">What's included:</h4>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Customized strategy development</li>
                  <li>Regular progress updates</li>
                  <li>Quality assurance testing</li>
                  <li>Post-launch support</li>
                </ul>
              </div>
              
              <button 
                onClick={handleRequestService}
                className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors w-full"
              >
                Request This Service
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}