import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    projectDetails: "",
    nda: "No",
    consent: "Yes",
  });

  const [status, setStatus] = useState("");

  const handleClose = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_gwafpyi",
          template_id: "template_6hn4hll",
          user_id: "NZ8E2nU8OBnS8HCDe",
          template_params: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            services: formData.services,
            projectDetails: formData.projectDetails,
            nda: formData.nda,
            consent: formData.consent,
            time: new Date().toLocaleString(),
          },
        }),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          services: "",
          projectDetails: "",
          nda: "No",
          consent: "Yes",
        });
      } else {
        const errorText = await response.text();
        console.error("EmailJS Error:", errorText);
        setStatus("❌ Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-lg relative">
        
        {/* Top-right X button (Close form) */}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 md:-top-2 md:-right-2 w-10 h-10 rounded-full bg-gray-800/70 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all z-50"
          title="Close and go to home"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-400">
            Get in touch for a free project estimate
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 md:p-8 shadow-xl"
        >
          <div className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
                placeholder="Services Needed (e.g., Web, Mobile, UI/UX)"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
            </div>

            {/* Project Details */}
            <div>
              <textarea
                name="projectDetails"
                required
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Project Details *"
                rows="4"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all resize-none"
              />
            </div>

            {/* NDA */}
            <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700">
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Do you require an NDA?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="nda"
                    value="Yes"
                    checked={formData.nda === "Yes"}
                    onChange={handleChange}
                    className="text-purple-500"
                  />
                  <span className="text-gray-300">Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="nda"
                    value="No"
                    checked={formData.nda === "No"}
                    onChange={handleChange}
                    className="text-purple-500"
                  />
                  <span className="text-gray-300">No</span>
                </label>
              </div>
            </div>

            {/* Marketing Consent */}
            <div className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
              <input
                type="checkbox"
                checked={formData.consent === "Yes"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    consent: e.target.checked ? "Yes" : "No",
                  })
                }
                className="mt-1 text-purple-500"
              />
              <label className="text-sm text-gray-300">
                I agree to receive marketing communications from College Campus
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              Send Request
            </button>

            {/* Status Message */}
            {status && (
              <div className={`p-3 rounded-lg text-center ${
                status.includes("✅") 
                  ? "bg-green-500/10 border border-green-500/20 text-green-400" 
                  : status.includes("❌") 
                    ? "bg-red-500/10 border border-red-500/20 text-red-400"
                    : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
              }`}>
                {status}
              </div>
            )}

            {/* Footer Note */}
            <p className="text-center text-xs text-gray-500 mt-4">
              We'll get back to you within 24 hours
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;