import React from 'react';
import { Code, Briefcase, GraduationCap, Award, Zap, Users, Globe, Rocket, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Briefcase size={24} />, number: '3+', label: 'Years Experience', desc: 'Industry experience' },
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
    { year: '2025', title: 'College Campus Founder', desc: 'Established College Campus agency to provide premium digital solutions to clients worldwide' },
    { year: '2023', title: 'Freelance Expansion', desc: 'Expanded services globally, working with clients across 8+ countries' },
    { year: '2022', title: 'Professional Developer', desc: 'Started professional freelance career with 50+ successful projects' },
    { year: '2021', title: 'Coding Journey Begins', desc: 'Began learning web development and digital technologies' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2e] to-[#0a0a1a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <GraduationCap size={16} className="text-purple-400" />
              <span className="text-sm text-purple-300">About College Campus</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Transforming Ideas Into </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a premier digital solutions agency specializing in creating innovative, 
              scalable, and results-driven web solutions for businesses worldwide.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance user experiences, and deliver measurable results through innovative 
                technology and exceptional craftsmanship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-6">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the leading global partner for businesses seeking digital transformation, 
                recognized for our technical excellence, innovative solutions, and unwavering 
                commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              By The <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-gray-400 text-lg">Our achievements speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/40 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-sm"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-2 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-400 text-lg">Milestones that define our growth and success</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all">
                    <div className="text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center border-4 border-[#0a0a1a] z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                {/* Year Indicator */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <div className={`text-4xl font-bold ${index % 2 === 0 ? 'text-right' : 'text-left'} text-transparent bg-gradient-to-r from-purple-400/20 to-pink-400/20 bg-clip-text`}>
                    {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Client-Centric</h3>
              <p className="text-gray-300">
                Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for perfection in every project, delivering exceptional quality and attention to detail.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Embracing cutting-edge technologies and creative solutions to solve complex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20"></div>
            
            {/* Content */}
            <div className="relative p-12 text-center backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have trusted College Campus with their digital success.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/form"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="/work"
                  className="px-8 py-4 border-2 border-purple-500/30 text-purple-300 rounded-full text-lg font-semibold hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
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