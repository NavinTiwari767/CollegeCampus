import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Check, Zap } from "lucide-react";

const services = [
  {
    title: "Email Marketing",
    description: "Reach your customers directly with impactful and personalized email campaigns that drive engagement and conversions.",
    icon: "📧",
    color: "from-yellow-400 to-orange-500",
    details: "Our email marketing service includes strategy development, template design, A/B testing, and performance analytics to maximize your ROI.",
    features: ["Campaign Strategy", "Template Design", "A/B Testing", "Analytics & Reports"]
  },
  {
    title: "Content Writing",
    description: "Engage your audience with high-quality blogs, articles, and copywriting designed to build trust and authority.",
    icon: "✍️",
    color: "from-amber-400 to-yellow-500",
    details: "We create SEO-optimized content that ranks well on search engines and resonates with your target audience across various platforms.",
    features: ["SEO Optimization", "Blog Writing", "Copywriting", "Content Strategy"]
  },
  {
    title: "Web Development",
    description: "Modern, responsive, and scalable websites tailored to your brand and business needs.",
    icon: "💻",
    color: "from-yellow-300 to-amber-400",
    details: "From simple landing pages to complex web applications, we build fast, secure, and mobile-friendly websites using the latest technologies.",
    features: ["Responsive Design", "Fast Performance", "Security", "Scalability"]
  },
  {
    title: "Mobile Development",
    description: "Custom mobile apps for iOS and Android that deliver seamless user experiences and business value.",
    icon: "📱",
    color: "from-orange-400 to-yellow-500",
    details: "We develop native and cross-platform mobile applications with intuitive UI/UX, robust functionality, and seamless performance.",
    features: ["iOS & Android", "Cross-platform", "Native Performance", "User-friendly"]
  },
  {
    title: "UX / UI Design",
    description: "Beautiful, intuitive, and user-friendly designs that create lasting impressions for your brand.",
    icon: "🎨",
    color: "from-amber-400 to-orange-400",
    details: "Our design process focuses on user research, wireframing, prototyping, and creating visually appealing interfaces that enhance user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
  },
  {
    title: "Generative AI Development",
    description: "Leverage the power of AI to automate tasks, generate creative content, and build intelligent business solutions.",
    icon: "🤖",
    color: "from-yellow-400 to-amber-500",
    details: "We develop custom AI solutions including chatbots, content generation systems, predictive analytics, and process automation tools.",
    features: ["AI Chatbots", "Content Generation", "Predictive Analytics", "Automation"]
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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
    setSelectedService(null);
    navigate("/form");
  };

  return (
    <div id="services" className="min-h-screen bg-black text-white px-4 py-12 md:px-6 md:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-yellow-100/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            We offer a comprehensive range of digital services to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-black border border-yellow-500/30 rounded-2xl group-hover:border-yellow-400/60 transition-colors"></div>
              
              {/* Hover Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-yellow-300 group-hover:text-yellow-200 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-yellow-100/70 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <div className="flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors font-semibold text-sm sm:text-base">
                  <span>Explore Service</span>
                  <Zap size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-sm z-50 p-4 md:p-6"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-gradient-to-br from-slate-900 via-black to-slate-900 border border-yellow-500/30 p-8 md:p-10 rounded-3xl max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-yellow-400 hover:text-yellow-300 transition-colors bg-yellow-500/10 hover:bg-yellow-500/20 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            {/* Icon and Title */}
            <div className="mb-6">
              <div className="text-6xl mb-4">{selectedService.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-3">
                {selectedService.title}
              </h3>
              <p className="text-yellow-100/70 text-lg">
                {selectedService.description}
              </p>
            </div>

            {/* Details Section */}
            <div className="py-6 border-y border-yellow-500/20">
              <p className="text-yellow-100/80 leading-relaxed mb-6">
                {selectedService.details}
              </p>
            </div>

            {/* Features */}
            <div className="my-8">
              <h4 className="text-xl font-semibold text-yellow-300 mb-4">What's Included:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-yellow-100/70">
                    <Check size={20} className="text-yellow-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleRequestService}
              className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold py-4 rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] text-lg"
            >
              Request This Service
            </button>

            {/* Secondary Action */}
            <button 
              onClick={() => setSelectedService(null)}
              className="w-full mt-3 border-2 border-yellow-500/30 text-yellow-300 font-semibold py-3 rounded-xl hover:bg-yellow-500/10 transition-colors"
            >
              Back to Services
            </button>
          </div>
        </div>
      )}
    </div>
  );
}