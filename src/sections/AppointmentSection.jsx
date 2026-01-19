import { motion } from "framer-motion";
import { AppointmentForm } from "../components/AppointmentForm";
import { Monitor, Leaf, Zap } from "lucide-react";

export function AppointmentSection() {
  return (
    <div className="grid items-start gap-10 md:grid-cols-2">
      {/* Left Content */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="space-y-4">
          <h2
            className="font-display text-3xl lg:text-4xl font-semibold
            bg-gradient-to-r from-matri-deep via-matri-green to-matri-deep
            bg-clip-text text-transparent"
          >
            Book your Matricharya consultation
          </h2>

          <p className="text-lg text-matri-deep/80 leading-relaxed">
            After submitting the form, your details are securely stored in the
            Matricharya system. Our team will review your request, update the
            appointment status, and confirm your consultation via email or phone
            call.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4">
          {/* Online / Clinic */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-4
            border border-matri-soft shadow-sm hover:shadow-md
            transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl bg-matri-soft
                flex items-center justify-center"
              >
                <Monitor className="w-6 h-6 text-matri-green" />
              </div>

              <div>
                <h3 className="font-semibold text-matri-deep">
                  Online & In-Clinic Options
                </h3>
                <p className="text-sm text-matri-deep/70">
                  Both video consultation and in-clinic visits are available
                </p>
              </div>
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-4
            border border-matri-soft shadow-sm hover:shadow-md
            transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl bg-matri-soft
                flex items-center justify-center"
              >
                <Leaf className="w-6 h-6 text-matri-green" />
              </div>

              <div>
                <h3 className="font-semibold text-matri-deep">
                  Specialized Programs
                </h3>
                <p className="text-sm text-matri-deep/70">
                  Happy Menses, Santan Yogya Shakti, Garbha, and Sutika wellness
                  programs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Response */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-4
            border border-matri-soft shadow-sm hover:shadow-md
            transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl bg-matri-soft
                flex items-center justify-center"
              >
                <Zap className="w-6 h-6 text-matri-green" />
              </div>

              <div>
                <h3 className="font-semibold text-matri-deep">
                  Quick Response
                </h3>
                <p className="text-sm text-matri-deep/70">
                  Every request is responded to within 8 working hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <AppointmentForm />
      </motion.div>
    </div>
  );
}
