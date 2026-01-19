import { motion } from "framer-motion";

export function PageHero({ icon, title, subtitle, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full"
      style={{
        background: gradient || "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #a855f7 100%)",
      }}
    >
      <div className="px-4 py-12 sm:py-16 lg:py-20 text-center">
        {/* Icon */}
        <div className="mx-auto mb-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/25 backdrop-blur flex items-center justify-center">
          <span className="text-lg sm:text-xl lg:text-2xl">{icon}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-tight mb-3">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}