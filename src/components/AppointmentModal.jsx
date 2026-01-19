import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  User,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Flower2,
  CheckCircle,
  Loader2,
} from "lucide-react";

export function AppointmentModal({ isOpen, onClose, isWelcomeModal = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    date: "",
    time: "",
    concern: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Sheets API endpoint for appointments
      const APPOINTMENT_API = import.meta.env.VITE_APPOINTMENT_API;

      if (APPOINTMENT_API) {
        await fetch(APPOINTMENT_API, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "appointment",
            fullName: formData.name,
            email: formData.email,
            phone: formData.phone,
            age: formData.age,
            preferredDate: formData.date,
            preferredTime: formData.time,
            concernType: formData.concern,
            notes: formData.notes,
            mode: "online",
            timestamp: new Date().toISOString(),
          }),
        });
      }

      console.log("Appointment request:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          date: "",
          time: "",
          concern: "",
          notes: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting appointment:", error);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          date: "",
          time: "",
          concern: "",
          notes: "",
        });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const concerns = [
    "PCOS/PCOD",
    "Irregular Periods",
    "Fertility Issues",
    "Pregnancy Care",
    "Postpartum Recovery",
    "Menopause Support",
    "Other",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-3xl shadow-2xl border border-pink-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            {isSubmitted ? (
              // Success Message
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                >
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </motion.div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Appointment Requested Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for choosing Matricharya. We'll contact you within
                  24 hours to confirm your appointment.
                </p>
                <div className="flex items-center justify-center gap-2 text-pink-600">
                  <Flower2 className="w-5 h-5" />
                  <span className="text-sm">
                    Your wellness journey begins soon
                  </span>
                  <Flower2 className="w-5 h-5" />
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="p-4 pb-3 rounded-t-3xl border-b border-pink-200/30">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                      <Flower2 className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">
                      {isWelcomeModal
                        ? "Welcome to Matricharya!"
                        : "Book Appointment"}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {isWelcomeModal
                        ? "Start your wellness journey with expert Ayurvedic care"
                        : "Schedule your consultation with our experts"}
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400 text-sm"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400 text-sm"
                        />
                      </div>

                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
                        <input
                          type="number"
                          name="age"
                          placeholder="Age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full pl-10 pr-4 py-2 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm"
                        />
                      </div>

                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-2 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent appearance-none text-sm"
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-pink-400" />
                      <select
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent appearance-none text-sm"
                      >
                        <option value="">Primary Concern</option>
                        {concerns.map((concern) => (
                          <option key={concern} value={concern}>
                            {concern}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-pink-400" />
                      <textarea
                        name="notes"
                        placeholder="Additional notes or symptoms..."
                        value={formData.notes}
                        onChange={handleChange}
                        rows={2}
                        className="w-full pl-10 pr-4 py-2 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400 resize-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 py-2 px-4 rounded-2xl border border-pink-200 text-pink-600 font-medium hover:bg-pink-50 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-2 px-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Book Appointment"
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
