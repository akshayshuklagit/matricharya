import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  User,
  MessageSquare,
  Flower2,
  CheckCircle,
  Loader2,
} from "lucide-react";

export function CallbackModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Sheets API endpoint for callback requests
      const CALLBACK_API = import.meta.env.VITE_CALLBACK_API;

      if (CALLBACK_API) {
        const payload = {
          type: "callback",
          name: formData.name,
          mobile: formData.mobile,
          notes: formData.notes,
          timestamp: new Date().toISOString(),
        };
        
        console.log("Sending callback data:", payload);
        
        await fetch(CALLBACK_API, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      console.log("Callback request:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: "", mobile: "", notes: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting callback request:", error);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: "", mobile: "", notes: "" });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            className="relative w-full max-w-md bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-3xl shadow-2xl border border-pink-200/50"
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
                  Request Submitted Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in Matricharya. We'll call you
                  back within 24 hours.
                </p>
                <div className="flex items-center justify-center gap-2 text-pink-600">
                  <Flower2 className="w-5 h-5" />
                  <span className="text-sm">We'll be in touch soon</span>
                  <Flower2 className="w-5 h-5" />
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="relative p-6 pb-4">
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                      <Flower2 className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                      Request Call Back
                    </h2>
                    <p className="text-sm text-gray-600">
                      We'll call you back within 24 hours
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Mobile Number"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-pink-400" />
                        <textarea
                          name="notes"
                          placeholder="Any specific concerns or preferred time to call..."
                          value={formData.notes}
                          onChange={handleChange}
                          rows={3}
                          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-pink-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent placeholder-gray-400 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 py-3 px-4 rounded-2xl border border-pink-200 text-pink-600 font-medium hover:bg-pink-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Request Call"
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
