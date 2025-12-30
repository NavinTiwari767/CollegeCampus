import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8 sm:py-12 md:py-16 font-[Poppins] relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-5xl bg-black/60 backdrop-blur-xl border border-yellow-500/30 rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-white">

        {/* Header + Close Button */}
        <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-2">
              Get In Touch 📞
            </h2>
            <p className="text-yellow-100/60 text-sm sm:text-base max-w-md">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="text-yellow-400 hover:text-yellow-300 transition shrink-0 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-full p-2"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300">
            ✅ Thank you! We'll get back to you within 24 hours.
          </div>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

          {/* Left: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-4 sm:mb-6">Contact Information</h3>

            {/* Email */}
            <div className="p-4 sm:p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/30 hover:border-yellow-400/60 hover:bg-yellow-500/10 transition">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs sm:text-sm text-yellow-100/60 font-semibold">Email</p>
                  <p className="font-medium text-yellow-100 text-sm sm:text-base">campuscollege3@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-4 sm:p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/30 hover:border-yellow-400/60 hover:bg-yellow-500/10 transition">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs sm:text-sm text-yellow-100/60 font-semibold">Phone</p>
                  <p className="font-medium text-yellow-100 text-sm sm:text-base">+91 7673864080</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-4 sm:p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/30 hover:border-yellow-400/60 hover:bg-yellow-500/10 transition">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs sm:text-sm text-yellow-100/60 font-semibold">Location</p>
                  <p className="font-medium text-yellow-100 text-sm sm:text-base">Kolkata, West Bengal, India</p>
                  <p className="text-xs text-yellow-100/50 mt-1">Remote Services Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <p className="text-xs sm:text-sm text-yellow-100/60 font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3 flex-wrap">
                <a href="#" className="px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs hover:bg-yellow-500/20 transition">
                  LinkedIn
                </a>
                <a href="#" className="px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs hover:bg-yellow-500/20 transition">
                  Instagram
                </a>
                <a href="#" className="px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs hover:bg-yellow-500/20 transition">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-4 sm:mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:from-yellow-300 hover:to-amber-400 transition font-semibold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
              >
                Send Message
              </button>

              {/* Helper Text */}
              <p className="text-xs text-yellow-100/60 text-center">
                ⏱️ We usually respond within 24 hours
              </p>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-yellow-500/20 text-center">
          <p className="text-xs sm:text-sm text-yellow-100/60">
            Your information is safe with us. We respect your privacy and will never share your data.
          </p>
        </div>
      </div>
    </div>
  );
}