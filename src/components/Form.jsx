import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [nda, setNda] = useState("no");
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    marketingConsent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "Branding",
    "Digital Marketing",
    "SEO Optimization",
    "Consulting",
    "Other"
  ];

  const handleClose = () => {
    navigate("/");
  };

  const clearPhoneNumber = () => {
    setFormData(prev => ({ ...prev, phone: "" }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.projectDetails.trim()) newErrors.projectDetails = "Project details are required";
    
    if (services.length === 0) newErrors.services = "Please select at least one service";

    return newErrors;
  };

  const toggleService = (service) => {
    setServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: "" }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceID = "YOUR_SERVICE_ID";
      const templateID = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: services.join(", "),
        project_details: formData.projectDetails,
        nda_required: nda === "yes" ? "Yes" : "No",
        marketing_consent: formData.marketingConsent ? "Yes" : "No"
      };

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        setSubmitStatus({ 
          type: "success", 
          message: "Your request has been submitted successfully. We will contact you within 24 hours." 
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          projectDetails: "",
          marketingConsent: false
        });
        setServices([]);
        setNda("no");
        setErrors({});
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({ 
        type: "error", 
        message: "There was an error submitting your request. Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-2xl relative">
        
        {/* Top-right X button (Close form) */}
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 md:-top-2 md:-right-2 w-10 h-10 rounded-full bg-gray-800/70 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all z-50"
          title="Close and go to home"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Project Inquiry Form
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Please fill out all required fields to submit your project inquiry
          </p>
          <p className="text-gray-500 text-sm mt-2">All fields are required*</p>
        </div>

        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-1 transition-all ${
                    errors.firstName 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" 
                      : "border-gray-700 focus:border-purple-500 focus:ring-purple-500/30"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-1 transition-all ${
                    errors.lastName 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" 
                      : "border-gray-700 focus:border-purple-500 focus:ring-purple-500/30"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-1 transition-all ${
                  errors.email 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" 
                    : "border-gray-700 focus:border-purple-500 focus:ring-purple-500/30"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number with Clear X Button - SIMPLIFIED */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-1 transition-all ${
                    errors.phone 
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" 
                      : "border-gray-700 focus:border-purple-500 focus:ring-purple-500/30"
                  }`}
                  placeholder="7673864080"
                />
                {/* Clear X button */}
                {formData.phone && (
                  <button
                    type="button"
                    onClick={clearPhoneNumber}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                    title="Clear phone number"
                  >
                    <span className="text-lg">×</span>
                  </button>
                )}
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-1 transition-all ${
                  errors.company 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" 
                    : "border-gray-700 focus:border-purple-500 focus:ring-purple-500/30"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            {/* Services */}
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-300">
                Services Needed <span className="text-red-500">*</span>
              </label>
              {errors.services && (
                <p className="text-red-500 text-xs mb-2">{errors.services}</p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {serviceOptions.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                      services.includes(service)
                        ? "bg-purple-600 border-purple-600 text-white"
                        : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600"
                    } ${errors.services ? "border-red-500/50" : ""}`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                placeholder="Please describe your project requirements, goals, and timeline..."
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-1 transition-all resize-none ${
                  errors.projectDetails 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" 
                    : "border-gray-700 focus:border-purple-500 focus:ring-purple-500/30"
                }`}
              />
              {errors.projectDetails && (
                <p className="text-red-500 text-xs mt-1">{errors.projectDetails}</p>
              )}
            </div>

            

            {/* Marketing Consent */}
            <div className={`p-4 bg-gray-800/30 rounded-lg border ${
              !formData.marketingConsent ? "border-red-500/50" : "border-gray-700"
            }`}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleInputChange}
                  className="mt-1 text-purple-500"
                  required
                />
                <div>
                  <span className="text-sm text-gray-300">
                    I agree to receive updates and marketing communications from College Campus. 
                    <span className="text-red-500"> *</span>
                  </span>
                  <p className="text-gray-500 text-xs mt-1">
                    You must agree to our terms to submit this form
                  </p>
                </div>
              </label>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === "success" 
                  ? "bg-green-500/10 border border-green-500/20 text-green-400" 
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-center text-sm text-gray-500">
              <span className="text-red-500">*</span> All fields are required
            </p>
            <p className="text-center text-sm text-gray-500 mt-2">
              Need immediate assistance? Call us at 7673864080
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;