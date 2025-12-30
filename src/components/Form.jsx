import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        setSubmitStatus({ type: 'success', message: 'Form submitted successfully! We will contact you soon.' });
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
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit form. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b061f] via-[#120a2f] to-[#1a0f3f] px-4 font-[Poppins]">
      <div className="relative w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 text-white">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-xl text-gray-300 hover:text-pink-500 transition"
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Start Your Project 🚀
        </h2>
        <p className="text-gray-400 mt-2 mb-6">
          Fill the form and our team will contact you soon
        </p>

        {/* Status Message */}
        {submitStatus && (
          <div className={`p-4 rounded-lg mb-4 ${submitStatus.type === 'success' ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'}`}>
            <p className={submitStatus.type === 'success' ? 'text-green-300' : 'text-red-300'}>
              {submitStatus.message}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          />

          <select
            required
            name="service"
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              handleChange(e);
            }}
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          >
            <option value="">Select Service</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>UX / UI Design</option>
            <option>Email Marketing</option>
            <option>Content Writing</option>
            <option>Generative AI Development</option>
            <option>Other</option>
          </select>

          {service === "Other" && (
            <input
              type="text"
              name="otherService"
              placeholder="Describe your requirement"
              required
              value={formData.otherService}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
            />
          )}

          <select
            required
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          >
            <option value="">Preferred Contact Method</option>
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp</option>
          </select>

          <textarea
            required
            name="message"
            placeholder="Tell us about your project"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}