import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b061f] via-[#120a2f] to-[#1a0f3f] flex items-center justify-center px-4 font-[Poppins]">

      <div className="relative w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 text-white">

        {/* Header + Close Button (NO OVERLAP) */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us 📞
            </h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Have a project in mind? Let’s build something amazing together.
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="text-2xl text-gray-300 hover:text-pink-500 transition shrink-0"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left: Contact Info */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">collegecampus@gmail.com</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium">+91 XXXXX XXXXX</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium">
                India (Remote Services Available)
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
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

            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-pink-500 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition font-medium"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-400 text-center">
              We usually respond within 24 hours ⏱️
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
