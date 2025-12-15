import React, { useEffect, useRef } from 'react';
import { Star, Quote, Globe, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

const Review = () => {
  const scrollContainerRef = useRef(null);
  const autoScrollInterval = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Adam Crook",
      country: "USA",
      language: "English",
      rating: 5,
      service: "Data Entry",
      content: "College Campus made my first experience with offshore data entry a successful process which I plan to repeat many times in the future. The work produced alleviated any concerns I had about whether a company half-way around the globe could meet my data entry needs.",
      imageColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      country: "India",
      language: "Hindi",
      rating: 5,
      service: "Web Development",
      content: "College Campus की टीम ने हमारी वेबसाइट को शानदार तरीके से डेवलप किया। उनकी प्रोफेशनलिस्म और समय पर डिलीवरी प्रशंसनीय है। पूरी टीम को धन्यवाद!",
      imageColor: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
    {
      id: 3,
      name: "张伟 (Zhang Wei)",
      country: "China",
      language: "Chinese",
      rating: 4,
      service: "UI/UX Design",
      content: "College Campus 的UI/UX设计服务非常专业。他们为我们设计的界面不仅美观，而且用户体验极佳。强烈推荐给需要高质量设计的公司。",
      imageColor: "bg-gradient-to-r from-pink-500 to-red-500",
    },
    {
      id: 4,
      name: "Priya Sharma",
      country: "India",
      language: "English",
      rating: 5,
      service: "SEO",
      content: "Thanks to College Campus's SEO services, our website traffic increased by 300% in just 3 months. Their strategic approach and regular reporting are impressive.",
      imageColor: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      id: 5,
      name: "Michael Schmidt",
      country: "Germany",
      language: "German",
      rating: 5,
      service: "App Development",
      content: "College Campus entwickelte unsere Mobile App perfekt nach unseren Anforderungen. Die Zusammenarbeit war reibungslos und die Ergebnisse übertrafen unsere Erwartungen.",
      imageColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      name: "Aarav Patel",
      country: "India",
      language: "Gujarati",
      rating: 4,
      service: "Data Entry",
      content: "College Campus ની ડેટા એન્ટ્રી સેવાઓ ખૂબ જ સચોટ અને ઝડપી છે. તેમની ટીમની કામગીરી અને સમયનું પાલન શ્લાઘનીય છે.",
      imageColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
  ];

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollInterval.current = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 1;
          
          // Reset to start if at the end
          if (scrollContainerRef.current.scrollLeft >= 
              scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
            scrollContainerRef.current.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startAutoScroll();

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  const pauseScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  const resumeScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
    autoScrollInterval.current = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 1;
        
        if (scrollContainerRef.current.scrollLeft >= 
            scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
          scrollContainerRef.current.scrollLeft = 0;
        }
      }
    }, 30);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 400;
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen py-16 px-4 md:px-8 overflow-hidden">
      {/* Same background as AnimatedBackground but static */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `linear-gradient(90deg, transparent 95%, #8b5cf6 100%),
                                 linear-gradient(0deg, transparent 95%, #8b5cf6 100%)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-900/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with number - matches your screenshot */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute -top-10 -left-10 text-9xl font-bold text-purple-500/20">99</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative">
              OUR TESTIMONIALS
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied clients across the globe
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-center items-center mb-10 space-x-6">
          <button
            onClick={scrollLeft}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button
            onClick={scrollRight}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>

        {/* Testimonials Container - Auto Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-8 py-8 px-4"
          style={{ scrollBehavior: 'smooth' }}
          onMouseEnter={pauseScroll}
          onMouseLeave={resumeScroll}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full md:w-96 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all hover:bg-white/10"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`${testimonial.imageColor} w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white">{testimonial.name}</h3>
                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex items-center space-x-1">
                        <Globe size={16} className="text-gray-400" />
                        <span className="text-gray-300">{testimonial.country}</span>
                      </div>
                      <span className={`text-sm px-3 py-1 rounded-full ${testimonial.imageColor} text-white`}>
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {renderStars(testimonial.rating)}
                  <span className="text-sm text-gray-400 mt-1 block">{testimonial.language}</span>
                </div>
              </div>

              <div className="mb-8 relative">
                <Quote className="absolute -top-4 -left-2 text-purple-500/10" size={60} />
                <p className="text-gray-200 text-lg leading-relaxed pl-4 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CC</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">College Campus</div>
                    <div className="text-gray-400 text-xs">Verified Partner</div>
                  </div>
                </div>
                <ThumbsUp size={24} className="text-green-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">100+</div>
            <div className="text-white font-medium">Projects</div>
            <p className="text-gray-400 text-sm mt-2">Successfully delivered</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">98%</div>
            <div className="text-white font-medium">Satisfaction</div>
            <p className="text-gray-400 text-sm mt-2">Client satisfaction rate</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">24/7</div>
            <div className="text-white font-medium">Support</div>
            <p className="text-gray-400 text-sm mt-2">Always available</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Our Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Data Entry', 'Web Dev', 'SEO', 'UI/UX', 'App Dev', 'Marketing'].map((service) => (
              <div
                key={service}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-purple-500/30 transition-all hover:bg-white/10"
              >
                <div className="text-white font-medium">{service}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">College Campus</div>
                <div className="text-gray-400">Digital Solutions Agency</div>
              </div>
            </div>
            <div className="flex justify-center space-x-8 mb-6">
              {["Home", "Services", "Our Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 My Agency. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Review;