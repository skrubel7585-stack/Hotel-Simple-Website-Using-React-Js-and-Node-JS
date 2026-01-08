export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0d2a]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.webp')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0d2a]/80" />

      {/* Subtle diagonal glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-indigo-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-10 lg:px-14">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-purple-200 leading-tight">
          Complete Commercial Kitchen Solutions for
          <span className="block mt-2">Hotels, Restaurants & Cloud Kitchens</span>
        </h1>

        <p className="mt-6 max-w-3xl text-sm md:text-base lg:text-lg text-gray-300">
          Professional kitchen equipment setup and supply for B2B buyers across Kolkata,
          Agartala, Bihar & Jharkhand. Get customized solutions designed specifically for
          hotel directors, restaurant owners, and food business operators.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-xl bg-pink-500 px-6 py-3 text-white font-medium shadow-lg hover:bg-pink-600 transition">
            Get Free Consultation
          </button>
          <button className="rounded-xl border border-pink-400 px-6 py-3 text-pink-400 font-medium hover:bg-pink-400 hover:text-white transition">
            View Equipment
          </button>
        </div>
      </div>
    </section>
  )
}
