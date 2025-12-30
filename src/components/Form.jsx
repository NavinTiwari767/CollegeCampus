import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import axios from 'axios';

export default function ClientForm() {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    contactMethod: "",
    message: "",
    otherService: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "Web Development",
    "Mobile App Development",
    "UX / UI Design",
    "Email Marketing",
    "Content Writing",
    "Generative AI Development",
    "Other"
  ];

  const contactMethods = ["Email", "Phone", "WhatsApp"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:5000/api/send-email', {
        ...formData,
        service: service === "Other" ? `Other - ${formData.otherService}` : service
      });

      if (response.data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Form submitted successfully! We will contact you within 24 hours.' 
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          contactMethod: "",
          message: "",
          otherService: ""
        });
        setService("");
        
        // Redirect after 2 seconds
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit form. Please try again or contact us directly.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-8 sm:py-12 md:py-16 font-[Poppins] relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-2xl bg-black/60 backdrop-blur-xl border border-yellow-500/30 rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-white">
        
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-yellow-400 hover:text-yellow-300 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-full p-2 transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-3">
            Start Your Project 🚀
          </h2>
          <p className="text-yellow-100/60 text-sm sm:text-base">
            Fill out this form and our team will contact you within 24 hours
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus && (
          <div className={`p-4 rounded-xl mb-6 flex items-start gap-3 ${
            submitStatus.type === 'success' 
              ? 'bg-green-500/20 border border-green-500/50' 
              : 'bg-red-500/20 border border-red-500/50'
          }`}>
            {submitStatus.type === 'success' ? (
              <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
            )}
            <p className={submitStatus.type === 'success' ? 'text-green-300 text-sm' : 'text-red-300 text-sm'}>
              {submitStatus.message}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs sm:text-sm text-yellow-300 font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm text-yellow-300 font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs sm:text-sm text-yellow-300 font-semibold mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXXXXXXX"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs sm:text-sm text-yellow-300 font-semibold mb-2">Service Required *</label>
            <select
              required
              name="service"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                handleChange(e);
              }}
              className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white text-sm sm:text-base transition"
            >
              <option value="">Select a service...</option>
              {services.map(svc => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
          </div>

          {/* Other Service Input */}
          {service === "Other" && (
            <div>
              <label className="block text-xs sm:text-sm text-yellow-300 font-semibold mb-2">Describe Your Requirement *</label>
              <input
                type="text"
                name="otherService"
                placeholder="Tell us what you need..."
                required
                value={formData.otherService}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition"
              />
            </div>
          )}

          {/* Contact Method */}
          <div>
            <label className="block text-xs sm:text-sm text-yellow-300 font-semibold mb-2">Preferred Contact Method *</label>
            <select
              required
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white text-sm sm:text-base transition"
            >
              <option value="">Select contact method...</option>
              {contactMethods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs sm:text-sm text-yellow-300 font-semibold mb-2">Project Description *</label>
            <textarea
              required
              name="message"
              placeholder="Tell us more about your project, timeline, and budget..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-yellow-500/5 border border-yellow-500/30 focus:border-yellow-400/60 focus:bg-yellow-500/10 outline-none text-white placeholder:text-yellow-100/50 text-sm sm:text-base transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition ${
              loading 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:from-yellow-300 hover:to-amber-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]'
            }`}
          >
            {loading ? (
              <>
                <Loader size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={18} />
                Submit Request
              </>
            )}
          </button>

          {/* Footer Note */}
          <p className="text-xs text-yellow-100/60 text-center pt-2">
            ✓ Your information is secure and won't be shared with anyone
          </p>
        </form>
      </div>
    </div>
  );
}