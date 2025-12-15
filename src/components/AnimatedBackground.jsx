import React, { useEffect, useRef } from "react";
import { Star, Quote, Globe, ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react";

function AnimatedBackground() {
  const canvasRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const autoScrollInterval = useRef(null);
  
  // Testimonials Data - ALL IN ENGLISH
  const testimonials = [
    {
      id: 1,
      name: "Adam Crook",
      country: "USA",
      language: "English",
      rating: 5,
      service: "Data Entry",
      content: "College Campus made my first experience with offshore data entry a successful process which I plan to repeat many times in the future.",
      imageColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      country: "India",
      language: "English",
      rating: 5,
      service: "Web Development",
      content: "The team at College Campus developed our website brilliantly. Their professionalism and timely delivery are commendable.",
      imageColor: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
    {
      id: 3,
      name: "Zhang Wei",
      country: "China",
      language: "English",
      rating: 4,
      service: "UI/UX Design",
      content: "College Campus's UI/UX design services are very professional. The interface they designed is beautiful and user-friendly.",
      imageColor: "bg-gradient-to-r from-pink-500 to-red-500",
    },
    {
      id: 4,
      name: "Priya Sharma",
      country: "India",
      language: "English",
      rating: 5,
      service: "SEO",
      content: "Thanks to College Campus's SEO services, our website traffic increased by 300% in just 3 months. Highly impressive.",
      imageColor: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      id: 5,
      name: "Michael Schmidt",
      country: "Germany",
      language: "English",
      rating: 5,
      service: "App Development",
      content: "College Campus developed our mobile app perfectly according to our requirements. Exceeded our expectations.",
      imageColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      name: "Aarav Patel",
      country: "India",
      language: "English",
      rating: 4,
      service: "Data Entry",
      content: "College Campus's data entry services are very accurate and fast. Their team's performance is praiseworthy.",
      imageColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      id: 7,
      name: "Chen Li",
      country: "Singapore",
      language: "English",
      rating: 5,
      service: "Web Development",
      content: "College Campus delivered an exceptional e-commerce website for our business. Their technical expertise is remarkable.",
      imageColor: "bg-gradient-to-r from-teal-500 to-blue-500",
    },
    {
      id: 8,
      name: "David Miller",
      country: "UK",
      language: "English",
      rating: 5,
      service: "UI/UX Design",
      content: "The design team at College Campus transformed our complex dashboard into an intuitive and beautiful interface.",
      imageColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    }
  ];

  // ===== CANVAS ANIMATION =====
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Grid-based network animation
    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Drift back to base position
        const dx = this.baseX - this.x;
        const dy = this.baseY - this.y;
        this.x += dx * 0.01;
        this.y += dy * 0.01;
      }
    }

    // Create grid of nodes
    const nodes = [];
    const spacing = 80;
    for (let x = -spacing; x < canvas.width + spacing; x += spacing) {
      for (let y = -spacing; y < canvas.height + spacing; y += spacing) {
        nodes.push(new Node(x, y));
      }
    }

    const animate = () => {
      time += 0.01;
      
      // Dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#0a0a1a");
      gradient.addColorStop(0.5, "#0f0f2e");
      gradient.addColorStop(1, "#1a0a2e");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach(node => node.update());

      // Draw connections
      ctx.strokeStyle = "rgba(99, 102, 241, 0.15)";
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with glow
      nodes.forEach(node => {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6);
        gradient.addColorStop(0, "rgba(147, 51, 234, 0.8)");
        gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.4)");
        gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = "rgba(236, 72, 153, 0.9)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle floating orbs
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * 0.5 + Math.cos(time * 0.5 + i * 2) * 200;
        const y = canvas.height * 0.5 + Math.sin(time * 0.3 + i * 2) * 150;
        
        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, 100);
        orbGradient.addColorStop(0, "rgba(147, 51, 234, 0.05)");
        orbGradient.addColorStop(1, "rgba(147, 51, 234, 0)");
        
        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(x, y, 100, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ===== TESTIMONIALS AUTO-SCROLL =====
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
            size={16}
            className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen">
      {/* ===== ANIMATED CANVAS BACKGROUND ===== */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Noise overlay for texture */}
      <div className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat'
           }}
      />

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 md:px-8 relative"
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a]/50 pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Welcome to College Campus
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            We build brands and grow businesses with cutting-edge web solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <button
              onClick={() => window.location.href = '/form'}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button 
              onClick={() => window.location.href = '/work'}
              className="px-6 sm:px-8 py-3 sm:py-4 border border-purple-500/30 text-purple-300 rounded-full text-base sm:text-lg font-semibold hover:bg-purple-500/10 hover:border-purple-500/50 transition-all w-full sm:w-auto"
            >
              View Work
            </button>
          </div>

          {/* Stats or features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-2xl mx-auto px-2">
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1 sm:mb-2">100+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1 sm:mb-2">98%</div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="relative py-12 md:py-16 px-3 sm:px-4 md:px-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header with number */}
          <div className="text-center mb-12 md:mb-16 px-2">
            <div className="inline-block relative">
              <div className="absolute -top-6 md:-top-8 -left-6 md:-left-10 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-purple-500/20">99</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 relative px-2">
                OUR TESTIMONIALS
              </h1>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Hear from our satisfied clients across the globe
            </p>
          </div>

          {/* Scroll Controls */}
          <div className="flex justify-center items-center mb-6 md:mb-8 space-x-4 md:space-x-6 px-2">
            <button
              onClick={scrollLeft}
              className="p-2 md:p-3 lg:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 md:p-3 lg:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          {/* Testimonials Container - Auto Scroll */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 sm:space-x-6 md:space-x-8 py-4 sm:py-6 md:py-8 px-3 sm:px-4"
            style={{ scrollBehavior: 'smooth' }}
            onMouseEnter={pauseScroll}
            onMouseLeave={resumeScroll}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 sm:w-84 md:w-96 bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all hover:bg-white/10 flex flex-col h-[380px]"
              >
                {/* Client Info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className={`${testimonial.imageColor} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-white truncate">{testimonial.name}</h3>
                      <p className="text-sm text-gray-300">{testimonial.country}</p>
                      <div className="mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${testimonial.imageColor} text-white`}>
                          {testimonial.service}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-3"></div>

                {/* Quote */}
                <div className="flex-1 mb-4 overflow-hidden">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-1 text-purple-500/10" size={40} />
                    <p className="text-gray-200 text-sm leading-relaxed italic pl-2 line-clamp-5">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">CC</span>
                      </div>
                      <div>
                        <div className="text-white text-xs font-medium">College Campus</div>
                        <div className="text-gray-400 text-xs">Verified Partner</div>
                      </div>
                    </div>
                    <ThumbsUp size={18} className="text-green-400" />
                  </div>
                  <div className="text-xs text-gray-500 text-right mt-1">Client Review</div>
                </div>
              </div>
            ))}
          </div>

          {/* Global Presence Stats */}
          <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">8+</div>
              <div className="text-white font-medium">Countries</div>
              <p className="text-gray-400 text-sm mt-1">Global client base</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">98%</div>
              <div className="text-white font-medium">Satisfaction</div>
              <p className="text-gray-400 text-sm mt-1">Client satisfaction rate</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">4.8/5</div>
              <div className="text-white font-medium">Average Rating</div>
              <p className="text-gray-400 text-sm mt-1">Based on 50+ reviews</p>
            </div>
          </div>

          {/* Services Section */}
         

        </div>
      </section>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default AnimatedBackground;