import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button as ShadButton } from "./ui/button";

const appointmentSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  age: z.string().optional(),
  pregnancyStage: z.string().optional(),
  concernType: z.string().min(1),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  mode: z.enum(["online", "clinic"]),
  notes: z.string().optional(),
});

const fieldClasses =
  "w-full input input-bordered rounded-2xl bg-pink-50/80 border-pink-200/60 text-sm focus:border-pink-400 focus:ring-pink-200";

export function AppointmentForm() {
  const [serverMessage, setServerMessage] = useState(null);
  const [serverError, setServerError] = useState(null);
  const APPOINTMENT_API = import.meta.env.VITE_APPOINTMENT_API;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: "",
      pregnancyStage: "",
      concernType: "",
      preferredDate: "",
      preferredTime: "",
      mode: "clinic",
      notes: "",
    },
  });

  const onSubmit = async (values) => {
    setServerMessage(null);
    setServerError(null);

    if (!APPOINTMENT_API) {
      alert("Appointment service not configured");
      return;
    }

    try {
      await fetch(APPOINTMENT_API, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      setServerMessage(
        "Thank you. Your appointment request has been received. We will contact you shortly.",
      );
      reset();
    } catch (e) {
      setServerError(
        "There was a problem submitting your request. Please try again or call the clinic.",
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-32"
    >
      {/* Single Connected Form Section */}
      <div className="bg-gradient-to-br from-pink-50/90 to-rose-50/90 rounded-3xl p-8 border-2 border-pink-200/50 shadow-lg backdrop-blur-sm space-y-8">
        {/* Personal Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-pink-700 tracking-wide flex items-center gap-2">
            <span className="text-pink-500">🌸</span> Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-pink-700">
                Full name *
              </label>
              <Input className={fieldClasses} {...register("fullName")} />
              {errors.fullName && (
                <p className="text-xs text-rose-500 flex items-center gap-1">
                  <span>⚠️</span> Please enter your full name.
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-pink-700">
                Email *
              </label>
              <Input className={fieldClasses} {...register("email")} />
              {errors.email && (
                <p className="text-xs text-rose-500 flex items-center gap-1">
                  <span>⚠️</span> Please enter a valid email.
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-pink-700">
                Phone *
              </label>
              <Input className={fieldClasses} {...register("phone")} />
              {errors.phone && (
                <p className="text-xs text-rose-500 flex items-center gap-1">
                  <span>⚠️</span> Please enter a valid contact number.
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-pink-700">Age</label>
              <Input className={fieldClasses} {...register("age")} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200/50"></div>

        {/* Health Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-purple-700 tracking-wide flex items-center gap-2">
            <span className="text-purple-500">💜</span> Health Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-700">
                Pregnancy stage or concern phase
              </label>
              <Input className={fieldClasses} {...register("pregnancyStage")} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-700">
                Primary concern or program *
              </label>
              <select
                className={fieldClasses}
                {...register("concernType", { required: true })}
              >
                <option value="">Select your concern</option>
                <option value="cycle">Cycle or hormonal balance</option>
                <option value="fertility">
                  Preconception or fertility support
                </option>
                <option value="pregnancy">Pregnancy Matricharya</option>
                <option value="postnatal">Postnatal and lactation</option>
                <option value="other">Other women's health concern</option>
              </select>
              {errors.concernType && (
                <p className="text-xs text-rose-500 flex items-center gap-1">
                  <span>⚠️</span> Please select your primary concern.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200/50"></div>

        {/* Appointment Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-rose-700 tracking-wide flex items-center gap-2">
            <span className="text-rose-500">📅</span> Appointment Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-rose-700">
                Preferred date *
              </label>
              <Input
                type="date"
                className={fieldClasses}
                {...register("preferredDate")}
              />
              {errors.preferredDate && (
                <p className="text-xs text-rose-500 flex items-center gap-1">
                  <span>⚠️</span> Please choose a preferred date.
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-rose-700">
                Preferred time *
              </label>
              <Input
                type="time"
                className={fieldClasses}
                {...register("preferredTime")}
              />
              {errors.preferredTime && (
                <p className="text-xs text-rose-500 flex items-center gap-1">
                  <span>⚠️</span> Please choose a preferred time.
                </p>
              )}
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-rose-700">
                Mode of consultation
              </label>
              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="clinic"
                    className="w-4 h-4 text-pink-500 border-pink-300 focus:ring-pink-200"
                    {...register("mode")}
                  />
                  <span className="text-rose-700">🏥 In-clinic</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="online"
                    className="w-4 h-4 text-pink-500 border-pink-300 focus:ring-pink-200"
                    {...register("mode")}
                  />
                  <span className="text-rose-700">💻 Online</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200/50"></div>

        {/* Additional Notes */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-pink-700 tracking-wide flex items-center gap-2">
            <span className="text-pink-500">📝</span> Additional Information
          </h3>
          <div className="space-y-2">
            <label className="text-sm font-medium text-pink-700">
              Anything you wish to share
            </label>
            <Textarea
              rows={4}
              className={fieldClasses}
              {...register("notes")}
              placeholder="Your story, current medicines, diagnostics, preferences..."
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200/50"></div>

        {/* Submit Section */}
        <div className="space-y-4">
          <ShadButton
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin">⏳</span> Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>🌸</span> Submit Appointment Request
              </span>
            )}
          </ShadButton>

          {serverMessage && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-2xl">
              <p className="text-sm text-green-700 flex items-center gap-2">
                <span>✅</span> {serverMessage}
              </p>
            </div>
          )}

          {serverError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
              <p className="text-sm text-red-700 flex items-center gap-2">
                <span>❌</span> {serverError}
              </p>
            </div>
          )}

          <p className="text-xs text-pink-600/80 text-center">
            🔒 By submitting this form, you consent to our team contacting you
            via email or phone for appointment confirmation.
          </p>
        </div>
      </div>
    </motion.form>
  );
}
