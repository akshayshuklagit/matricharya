import { motion } from "framer-motion";
import { EducationSection } from "../sections/EducationSection";

export function EducationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-amber-400 via-orange-300 to-red-300 animate-gradient-x"
    >
      <div className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-16 px-4 pb-8 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <EducationSection />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}