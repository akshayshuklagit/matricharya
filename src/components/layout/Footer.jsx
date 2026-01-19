import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Info,
  Users,
  Stethoscope,
  BookOpen,
  CalendarCheck,
  HeartPulse,
  Baby,
  Flower2,
  Activity,
  RefreshCw,
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about", icon: Info },
    { name: "Our Doctors", href: "/doctors", icon: Users },
    { name: "Programs", href: "/programs", icon: HeartPulse },
    { name: "Education", href: "/education", icon: BookOpen },
    { name: "Book Appointment", href: "/appointment", icon: CalendarCheck },
  ];

  const services = [
    { name: "Menstrual Health", icon: Activity },
    { name: "Fertility Care", icon: HeartPulse },
    { name: "Pregnancy Support", icon: Baby },
    { name: "Postnatal Recovery", icon: RefreshCw },
    { name: "PCOS/PCOD Treatment", icon: Flower2 },
    { name: "Hormonal Balance", icon: Stethoscope },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Vaidyagaon, Wazirganj, Gonda, UP" },
    { icon: Phone, text: "+91 7711761340" },
    { icon: Mail, text: "matricharya@gmail.com" },
    { icon: Clock, text: "Mon-Sat: 9:00 AM - 6:00 PM" },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #a855f7 100%)",
        // "#F6A8DF",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/20"
        >
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="text-center">
              <h4 className="font-display text-2xl text-white mb-4">
                Stay Updated with Matricharya
              </h4>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to receive wellness tips, Ayurvedic insights, and
                updates about women's health from our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-pink-200/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-200/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-white text-pink-600 font-semibold hover:bg-pink-50 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="font-display text-3xl text-white mb-4">
                  Matricharya
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Dedicated Ayurvedic gynaecology and women's wellness clinic
                  supporting women through every stage of life.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="glass backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 italic text-sm leading-relaxed">
                  “Empowering every woman through Ayurvedic science towards
                  Happy Menses, a Healthy Womb, and Healthy Progeny.”
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-xl text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        to={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-3 group"
                      >
                        <Icon className="w-4 h-4 text-pink-200 group-hover:scale-110 transition-transform" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-xl text-white mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="text-white/80 flex items-center gap-3"
                    >
                      <Icon className="w-4 h-4 text-pink-200" />
                      <span>{service.name}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-xl text-white mb-6">
                Contact Us
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <Icon className="w-5 h-5 mt-0.5 text-pink-200" />
                      <span className="leading-relaxed">{info.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="font-medium text-white mb-4">Follow Us</h5>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, name: "Facebook" },
                    { icon: Instagram, name: "Instagram" },
                    { icon: Twitter, name: "Twitter" },
                    { icon: Youtube, name: "YouTube" },
                  ].map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full glass backdrop-blur-md 
      border border-pink-200/30 flex items-center justify-center 
      hover:bg-pink-200/20 transition-colors"
                        title={social.name}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/70 text-sm"
              >
                © 2026 Matricharya. All rights reserved. | Ayurvedic Gynaecology
                & Women's Wellness
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/70 text-sm text-center md:text-right"
              >
                <p>Website developed by</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
                  <a
                    href="mailto:1techVeda@gmail.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    1techVeda@gmail.com
                  </a>
                  <span className="hidden sm:inline text-white/50">|</span>
                  <a
                    href="https://1techVeda.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    1techVeda.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
