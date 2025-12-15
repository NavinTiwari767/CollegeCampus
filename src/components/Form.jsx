import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientForm() {
  const navigate = useNavigate();
  const [service, setService] = useState("");

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

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          />

          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
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
              placeholder="Describe your requirement"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
            />
          )}

          <select
            required
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          >
            <option value="">Preferred Contact Method</option>
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp</option>
          </select>

          <textarea
            required
            placeholder="Tell us about your project"
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition font-medium"
          >
            Submit Request
          </button>

        </form>
      </div>
    </div>
  );
}
