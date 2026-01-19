import { motion } from "framer-motion";
import { ShieldCheck, Lock, Stethoscope, CalendarCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";

import { AppointmentSection } from "../sections/AppointmentSection";
export function AppointmentPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50"
    >
      <div className="pt-16 sm:pt-20">
        <PageHero
          icon={<CalendarCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
          title="Book Your Consultation"
          subtitle="Begin your journey to holistic women's wellness with expert Ayurvedic care."
        />

        {/* Appointment Form */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl border border-pink-200/50"
          >
            <AppointmentSection />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}