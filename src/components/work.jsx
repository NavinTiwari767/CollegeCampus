import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpeg';
import p8 from '../assets/p8.jpeg';
import n1 from '../assets/n1_v2.jpeg';
import n2 from '../assets/n2.jpeg';
import n3 from '../assets/n3.jpeg';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

function TiltedCard({
  images = [],
  altText = 'Tilted card image',
  containerHeight = '300px',
  containerWidth = '100%',
  scaleOnHover = 1.05,
  rotateAmplitude = 8,
  isMobile = false,
  title = '',
  description = '',
  category = '',
  onClick = () => {}
}) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const validImages = images.filter(img => img && img.trim() !== '');

  useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [validImages.length, isHovered]);

  function handleMouse(e) {
    if (!ref.current || isMobile) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    if (isMobile) return;
    scale.set(scaleOnHover);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    if (isMobile) return;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const goToImage = (index, e) => {
    e?.stopPropagation();
    setCurrentImageIndex(index);
  };

  if (validImages.length === 0) {
    return (
      <div 
        className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-500/10 to-black border border-yellow-500/30 flex items-center justify-center"
        style={{ height: containerHeight }}
      >
        <div className="text-center p-6">
          <div className="text-4xl mb-4">📷</div>
          <p className="text-yellow-300 font-medium">No Image Available</p>
          <p className="text-yellow-100/60 text-sm mt-2">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center cursor-pointer group"
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative [transform-style:preserve-3d] w-full h-full rounded-2xl overflow-hidden bg-gray-900 border border-yellow-500/20 group-hover:border-yellow-400/60 transition-colors"
        style={{
          rotateX,
          rotateY,
          scale: isMobile ? 1 : scale
        }}
      >
        {/* Image Slider */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={validImages[currentImageIndex]}
              alt={`${altText} ${currentImageIndex + 1}`}
              className="absolute top-0 left-0 object-cover w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
          </AnimatePresence>

          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Navigation Arrows */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-500/20 hover:bg-yellow-500/40 text-white p-2 rounded-full transition-all z-10 backdrop-blur-sm border border-yellow-500/30"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500/20 hover:bg-yellow-500/40 text-white p-2 rounded-full transition-all z-10 backdrop-blur-sm border border-yellow-500/30"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {validImages.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {validImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToImage(index, e)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index
                      ? 'bg-yellow-400 w-4'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Image Counter */}
          {validImages.length > 1 && (
            <div className="absolute top-3 right-3 bg-black/70 text-yellow-300 px-2 py-1 rounded-full text-xs z-10 backdrop-blur-sm border border-yellow-500/30">
              {currentImageIndex + 1} / {validImages.length}
            </div>
          )}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
            {category && (
              <span className="inline-block bg-yellow-500/80 text-black px-3 py-1 rounded-full text-xs sm:text-sm mb-2 font-semibold">
                {category}
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-yellow-300">{title}</h3>
            <p className="text-yellow-100/70 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{description}</p>
            {validImages.length > 1 && (
              <p className="text-xs text-yellow-600 mb-2">
                📷 {validImages.length} images
              </p>
            )}
            <button className="bg-yellow-400 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-yellow-300 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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

  const works = [
    {
      id: "w1",
      images: [p1, p2, p3],
      title: "NIST UNIVERSITY Website",
      category: "Web Development",
      type: "Website",
      description: "A modern e-commerce platform built with React and Node.js",
      fullDescription: "This e-commerce platform was developed with a focus on user experience and performance. It includes features like product catalog, shopping cart, user authentication, payment integration, and admin dashboard. The responsive design ensures seamless shopping across all devices.",
      link: "https://nist.edu/sankalp",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Stripe"],
      year: "2024"
    },
    {
      id: "w2",
      images: [p4, p5, p6, p7, p8],
      title: "Club Website", 
      category: "Web Development",
      type: "Website",
      description: "Personal portfolio website with interactive animations",
      fullDescription: "A custom portfolio website showcasing my work with smooth animations and interactive elements. Built with performance in mind, featuring lazy loading, optimized images, and clean code architecture. The design emphasizes usability while maintaining visual appeal.",
      link: "https://www.cloudcomputingclub.co.in/",
      technologies: ["React", "Node.js", "TailwindCSS", "Express", "MongoDB"],
      year: "2023"
    },
    {
      id: "w3",
      images: [n1, n2, n3],
      title: "Nautical Crew Maritime",
      category: "Web Development",
      type: "Website",
      description: "Productivity app for team collaboration and task management",
      fullDescription: "A comprehensive task management solution for teams. Features include project boards, task assignments, deadline tracking, file sharing, and real-time notifications. The intuitive interface helps teams stay organized and productive across iOS and Android platforms.",
      link: "https://www.arihantmaritime.in/",
      technologies: ["React", "Node.js", "TailwindCSS", "Express", "MongoDB"],
      year: "2025"
    }
  ];

  const categories = ['All', ...new Set(works.map(work => work.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWorks = activeCategory === 'All' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8 md:py-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
            Our Work
          </span>
        </h2>

        <p className="text-yellow-100/60 text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 px-2 text-sm sm:text-base">
          Here are some of our recent projects. Click on each card to view more details.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 justify-center px-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all font-semibold ${
                activeCategory === category 
                  ? 'bg-yellow-400 text-black border border-yellow-300' 
                  : 'bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500/20 border border-yellow-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredWorks.map((work) => (
              <TiltedCard
                key={work.id}
                images={work.images}
                altText={work.title}
                title={work.title}
                description={work.description}
                category={work.category}
                containerHeight="300px"
                scaleOnHover={1.02}
                rotateAmplitude={5}
                isMobile={isMobile}
                onClick={() => {
                  setActiveWork(work);
                  setIsOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && activeWork && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-sm z-50 px-4 py-6 md:py-12 overflow-y-auto">
          <div className="bg-gradient-to-br from-slate-900 via-black to-slate-900 border border-yellow-500/30 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-4xl relative mt-auto mb-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 z-10 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                {activeWork.category}
              </span>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                {activeWork.type}
              </span>
              <span className="bg-yellow-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                {activeWork.year}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-yellow-300">
              {activeWork.title}
            </h2>
            <p className="text-yellow-100/70 text-base sm:text-lg leading-relaxed mb-6">
              {activeWork.fullDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6 mb-6">
              {activeWork.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-yellow-500/40"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <button 
              onClick={() => window.open(activeWork.link, '_blank')}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 sm:px-8 py-3 rounded-xl font-semibold hover:from-yellow-300 hover:to-amber-400 transition-all hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]"
            >
              View Live Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;