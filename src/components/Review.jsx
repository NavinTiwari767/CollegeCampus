// import { Star, Quote, MapPin } from 'lucide-react';

// export default function TestimonialMarquee() {
//   const testimonials = [
//     {
//       id: 1,
//       name: 'Sarah Mitchell',
//       country: 'United States',
//       rating: 5,
//       service: 'Web Development',
//       review: 'Exceptional quality and attention to detail. The team delivered ahead of schedule and exceeded all expectations.',
//     },
//     {
//       id: 2,
//       name: 'James Chen',
//       country: 'Singapore',
//       rating: 5,
//       service: 'UI/UX Design',
//       review: 'Outstanding design work that perfectly captured our brand vision. Highly professional and collaborative throughout.',
//     },
//     {
//       id: 3,
//       name: 'Emma Rodriguez',
//       country: 'Spain',
//       rating: 5,
//       service: 'Mobile App',
//       review: 'Transformed our business with an incredible mobile solution. The support team was responsive and helpful.',
//     },
//     {
//       id: 4,
//       name: 'Alex Thompson',
//       country: 'Canada',
//       rating: 5,
//       service: 'Brand Strategy',
//       review: 'Creative insights that completely elevated our brand positioning. A pleasure to work with from start to finish.',
//     },
//     {
//       id: 5,
//       name: 'Lisa Patel',
//       country: 'India',
//       rating: 5,
//       service: 'Digital Marketing',
//       review: 'Results-driven approach that significantly boosted our online presence. Excellent ROI and measurable impact.',
//     },
//     {
//       id: 6,
//       name: 'Marcus Johnson',
//       country: 'United Kingdom',
//       rating: 5,
//       service: 'Consulting',
//       review: 'Strategic guidance that transformed our operations. The team brought valuable experience and fresh perspectives.',
//     },
//   ];

//   // Duplicate testimonials for seamless loop
//   const duplicatedTestimonials = [...testimonials, ...testimonials];

//   const StarRating = ({ rating }) => (
//     <div className="flex gap-1">
//       {[...Array(5)].map((_, i) => (
//         <Star
//           key={i}
//           size={16}
//           className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <section className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         <div className="text-center">
//           <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
//             Loved by Clients Worldwide
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Real feedback from teams who've transformed their business with our solutions
//           </p>
//         </div>
//       </div>

//       {/* Marquee container */}
//       <div className="relative w-full overflow-hidden">
//         {/* Left gradient overlay */}
//         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
        
//         {/* Right gradient overlay */}
//         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

//         {/* Scrolling content */}
//         <style>{`
//           @keyframes marquee {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(calc(-50% - 16px));
//             }
//           }
          
//           .marquee {
//             animation: marquee 20s linear infinite;
//           }
          
//           .marquee:hover {
//             animation-play-state: paused;
//           }
//         `}</style>

//         <div className="marquee flex gap-4">
//           {duplicatedTestimonials.map((testimonial, idx) => (
//             <div
//               key={`${testimonial.id}-${idx}`}
//               className="flex-shrink-0 w-full sm:w-96 group"
//             >
//               <div className="relative h-full">
//                 {/* Card background with glassmorphism */}
//                 <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-blue-400/30 group-hover:shadow-2xl group-hover:shadow-blue-500/20"></div>

//                 {/* Gradient glow on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 blur-xl"></div>

//                 {/* Content */}
//                 <div className="relative p-8 h-full flex flex-col justify-between">
//                   {/* Header with quote */}
//                   <div className="flex items-start justify-between mb-4">
//                     <Quote size={24} className="text-blue-400/60 flex-shrink-0" />
//                     <div className="text-right">
//                       <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
//                         {testimonial.service}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Review text */}
//                   <p className="text-gray-100 text-sm leading-relaxed mb-6 flex-grow">
//                     "{testimonial.review}"
//                   </p>

//                   {/* Rating */}
//                   <div className="mb-4">
//                     <StarRating rating={testimonial.rating} />
//                   </div>

//                   {/* Footer with client info */}
//                   <div className="border-t border-white/10 pt-4">
//                     <h3 className="text-white font-semibold mb-1">{testimonial.name}</h3>
//                     <div className="flex items-center gap-1.5 text-gray-400 text-sm">
//                       <MapPin size={14} />
//                       <span>{testimonial.country}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Lift effect on hover */}
//                 <style>{`
//                   .group:hover > div:first-child {
//                     transform: translateY(-8px);
//                   }
//                 `}</style>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom accent */}
//       <div className="relative z-10 mt-12 text-center">
//         <p className="text-gray-500 text-sm">
//           Join hundreds of satisfied clients • 5-star rated service
//         </p>
//       </div>
//     </section>
//   );
// }