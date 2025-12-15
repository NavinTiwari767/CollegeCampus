import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

function TiltedCard({
  images = [], // Array of images for scrolling
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  scaleOnHover = 1.05,
  rotateAmplitude = 8,
  showTooltip = false,
  onClick = () => {},
  isMobile = false,
  title = '',
  description = '',
  category = ''
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);

  const [isTouching, setIsTouching] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if images are available before attempting to load
  const validImages = images.filter(img => img && img.trim() !== '');

  // Auto-scroll for cards with multiple valid images
  useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHovered) { // Only auto-scroll when not hovered
        setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [validImages.length, isHovered]);

  // Handle image load errors
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    console.error(`Failed to load image at index ${currentImageIndex}`);
  };

  function handleMouse(e) {
    if (!ref.current || isMobile) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleTouch(e) {
    if (!ref.current || !isMobile) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const rect = ref.current.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left - rect.width / 2;
    const offsetY = touch.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
    
    setIsTouching(true);
  }

  function handleTouchEnd() {
    if (!isMobile) return;
    
    rotateX.set(0);
    rotateY.set(0);
    setIsTouching(false);
  }

  function handleMouseEnter() {
    if (isMobile) return;
    scale.set(scaleOnHover);
    opacity.set(1);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    if (isMobile) return;
    opacity.set(0);
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

  // If no valid images, show fallback
  if (validImages.length === 0) {
    return (
      <div 
        className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 flex items-center justify-center"
        style={{ height: containerHeight }}
      >
        <div className="text-center p-6">
          <div className="text-4xl mb-4">📷</div>
          <p className="text-white font-medium">No Image Available</p>
          <p className="text-gray-400 text-sm mt-2">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center cursor-pointer"
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouch}
      onTouchStart={handleTouch}
      onTouchEnd={handleTouchEnd}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative [transform-style:preserve-3d] w-full h-full rounded-2xl overflow-hidden bg-gray-900"
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
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </AnimatePresence>

          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Navigation Arrows - Show only if multiple images */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10 backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10 backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator - Show only if multiple images */}
          {validImages.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {validImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToImage(index, e)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index
                      ? 'bg-white w-4'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Image Counter */}
          {validImages.length > 1 && (
            <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs z-10 backdrop-blur-sm">
              {currentImageIndex + 1} / {validImages.length}
            </div>
          )}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {category && (
              <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm mb-2">
                {category}
              </span>
            )}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-3">{description}</p>
            {validImages.length > 1 && (
              <p className="text-xs text-gray-400 mb-2">
                📷 {validImages.length} images • Auto-scrolling enabled
              </p>
            )}
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </motion.div>

      {showTooltip && !isMobile && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3]"
          style={{
            x,
            y,
            opacity
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
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

  // Projects data - FIXED: Removed empty image strings from 3rd card
  const works = [
    {
      id: "w1",
      images: [
        "/src/assets/p1.jpeg"
      ],
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
      images: [
        "/src/assets/p4.jpeg"
      ],
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
      images: [
        "/src/assets/n1.jpeg",
        "/src/assets/n2.jpeg",
        "/src/assets/n3.jpeg",
        "/src/assets/n4.jpeg"
      ],
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

  // Get unique categories for filtering
  const categories = ['All', ...new Set(works.map(work => work.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter works based on selected category
  const filteredWorks = activeCategory === 'All' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center px-4 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Work
        </span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mb-8 md:mb-12 px-4">
        Here are some of my recent projects. Click on each card to view more details.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <TiltedCard
              key={work.id}
              images={work.images}
              altText={work.title}
              title={work.title}
              description={work.description}
              category={work.category}
              containerHeight="350px"
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

      {/* Modal */}
      {isOpen && activeWork && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 px-4 py-6 md:py-12 overflow-y-auto">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 md:p-6 w-full max-w-4xl relative mt-auto mb-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl md:text-3xl z-10 bg-gray-800 rounded-full p-1"
            >
              ✕
            </button>

            {/* Content */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                {activeWork.category}
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {activeWork.type}
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                {activeWork.year}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              {activeWork.title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              {activeWork.fullDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {activeWork.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <button 
              onClick={() => window.open(activeWork.link, '_blank')}
              className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
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