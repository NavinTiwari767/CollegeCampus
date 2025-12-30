import React from 'react';
import { Code, Briefcase, GraduationCap, Award, Zap, Users, Globe, Rocket, Target, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Briefcase size={24} />, number: '3+', label: 'Years Experience', desc: 'Industry expertise' },
    { icon: <Users size={24} />, number: '50+', label: 'Happy Clients', desc: 'Global satisfaction' },
    { icon: <Award size={24} />, number: '100+', label: 'Projects', desc: 'Successfully delivered' },
    { icon: <Zap size={24} />, number: '24/7', label: 'Support', desc: 'Always available' }
  ];

  const services = [
    { icon: <Code size={24} />, title: 'Web Development', desc: 'Modern, responsive websites and web applications' },
    { icon: <Globe size={24} />, title: 'Data Entry', desc: 'Accurate and efficient data processing solutions' },
    { icon: <Rocket size={24} />, title: 'SEO Optimization', desc: 'Boost your online visibility and rankings' },
    { icon: <Target size={24} />, title: 'UI/UX Design', desc: 'User-centered design for exceptional experiences' },
    { icon: <Briefcase size={24} />, title: 'App Development', desc: 'Mobile applications for iOS and Android' },
    { icon: <Heart size={24} />, title: 'Digital Solutions', desc: 'Comprehensive digital transformation' }
  ];

  const timeline = [
    { year: '2025', title: 'College Campus Founded', desc: 'Established College Campus agency to provide premium digital solutions to clients worldwide' },
    { year: '2023', title: 'Freelance Expansion', desc: 'Expanded services globally, working with clients across 8+ countries' },
    { year: '2022', title: 'Professional Developer', desc: 'Started professional freelance career with 50+ successful projects' },
    { year: '2021', title: 'Coding Journey', desc: 'Began learning web development and digital technologies' }
  ];

  const values = [
    { icon: <Heart size={32} />, title: 'Client-Centric', desc: 'Your success is our priority. We deliver solutions that exceed expectations.' },
    { icon: <Award size={32} />, title: 'Excellence', desc: 'Exceptional quality and attention to detail in every project.' },
    { icon: <Zap size={32} />, title: 'Innovation', desc: 'Cutting-edge technologies and creative solutions for complex challenges.' }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4 sm:mb-6">
              <GraduationCap size={16} className="text-yellow-400" />
              <span className="text-xs sm:text-sm text-yellow-300">About College Campus</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2">
              <span className="text-white">Transforming Ideas Into </span>
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-yellow-100/60 max-w-3xl mx-auto leading-relaxed px-2">
              We are a premier digital solutions agency specializing in creating innovative, 
              scalable, and results-driven web solutions for businesses worldwide.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 px-2">
            <div className="bg-gradient-to-br from-yellow-500/10 to-black border border-yellow-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-yellow-400/60 transition-all hover:shadow-lg hover:shadow-yellow-500/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center mb-4 sm:mb-6">
                <Target className="text-black" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-yellow-100/70 leading-relaxed text-sm sm:text-base">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance user experiences, and deliver measurable results through innovative 
                technology and exceptional craftsmanship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-black border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-amber-400/60 transition-all hover:shadow-lg hover:shadow-amber-500/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 flex items-center justify-center mb-4 sm:mb-6">
                <Rocket className="text-black" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-yellow-100/70 leading-relaxed text-sm sm:text-base">
                To become the leading global partner for businesses seeking digital transformation, 
                recognized for our technical excellence, innovative solutions, and unwavering 
                commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              By The <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-yellow-100/60 text-sm sm:text-base">Our achievements speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 px-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-4 sm:p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/30 hover:border-yellow-400/60 transition-all hover:shadow-lg hover:shadow-yellow-500/20 backdrop-blur-sm"
              >
                <div className="text-yellow-400 mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-lg font-semibold text-yellow-200 mb-1">{stat.label}</div>
                <div className="text-xs text-yellow-100/60">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Our <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-yellow-100/60 text-sm sm:text-base max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/30 hover:border-yellow-400/60 transition-all hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2 backdrop-blur-sm"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-black">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-yellow-100/70 leading-relaxed text-sm sm:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Our <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-yellow-100/60 text-sm sm:text-base">Milestones that define our growth and success</p>
          </div>

          <div className="relative space-y-6 sm:space-y-8 px-2">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-4 sm:gap-6"
              >
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center border-4 border-black z-10 flex-shrink-0">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black"></div>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-yellow-500 to-transparent mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-4 sm:pb-6 flex-1 pt-1 sm:pt-2">
                  <div className="bg-yellow-500/5 border border-yellow-500/30 rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-yellow-400/60 transition-all hover:shadow-lg hover:shadow-yellow-500/20">
                    <div className="text-yellow-400 font-bold text-base sm:text-lg mb-1 sm:mb-2">{item.year}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-yellow-100/70 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Our <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-yellow-100/60 text-sm sm:text-base">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 rounded-2xl bg-yellow-500/5 border border-yellow-500/30 hover:border-yellow-400/60 transition-all hover:shadow-lg hover:shadow-yellow-500/20 backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="text-black">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-yellow-100/70 text-sm sm:text-base leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-yellow-500/30">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20"></div>
            
            {/* Content */}
            <div className="relative p-8 sm:p-10 md:p-12 text-center backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-yellow-100/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Join hundreds of satisfied clients who have trusted College Campus with their digital success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <a
                  href="/form"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-full font-semibold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight size={18} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="/work"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-500/30 text-yellow-300 rounded-full font-semibold hover:bg-yellow-500/10 hover:border-yellow-500/60 transition-all text-sm sm:text-base"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;