import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/matricharya_logo.png";
import { CallbackModal } from "../CallbackModal";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Diseases", path: "/diseases" },
    { label: "Doctors", path: "/doctors" },
    { label: "About", path: "/about" },
    { label: "Appointment", path: "/appointment" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="fixed top-0 z-50 w-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 239, 230, 0.95) 50%, rgba(205, 227, 210, 0.95) 100%)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(123, 174, 127, 0.2)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-3">
            {/* Logo Section */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  src={logo}
                  alt="Matricharya Logo"
                  className="h-15 w-35 pl-2 group-hover:shadow-xl transition-shadow duration-300"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group no-underline ${
                      location.pathname === item.path
                        ? "text-white shadow-lg"
                        : "text-pink-800 hover:text-pink-900 hover:bg-white/50"
                    }`}
                    style={{
                      background:
                        location.pathname === item.path
                          ? "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)"
                          : "transparent",
                      color:
                        location.pathname !== item.path ? "#9f1239" : "white",
                    }}
                  >
                    {item.label}
                    {location.pathname !== item.path && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-matri-green/10 to-matri-softGreen/10 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.a
                href="tel:+919984276035"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(123, 174, 127, 0.4)",
                    "0 0 0 10px rgba(123, 174, 127, 0)",
                    "0 0 0 0 rgba(123, 174, 127, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-2 rounded-full border border-matri-green/30 text-matri-green hover:bg-matri-green/10 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://wa.me/917011761340"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251" />
                </svg>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-sm hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Request Call back
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-3 rounded-full bg-white/80 shadow-lg border border-matri-green/20 hover:bg-white transition-all duration-300"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: 45, y: 6, opacity: 1 },
                  }}
                  className="w-6 h-0.5 bg-matri-deep block transition-all origin-center rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1, x: 0 },
                    open: { opacity: 0, x: -10 },
                  }}
                  className="w-6 h-0.5 bg-matri-deep block mt-1.5 transition-all rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: -45, y: -6, opacity: 1 },
                  }}
                  className="w-6 h-0.5 bg-matri-deep block mt-1.5 transition-all origin-center rounded-full"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] shadow-2xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 239, 230, 0.98) 50%, rgba(205, 227, 210, 0.98) 100%)",
                backdropFilter: "blur(20px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full pt-24 px-6">
                {/* Mobile Logo */}
                <div className="text-center mb-8">
                  <img
                    src={logo}
                    alt="Matricharya Logo"
                    className="h-16 w-16 rounded-full mx-auto mb-3 shadow-xl"
                  />

                  <p className="text-sm text-matri-deep/60">
                    Ayurvedic Women's Wellness
                  </p>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-3 flex-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                          location.pathname === item.path
                            ? "text-white shadow-lg"
                            : "text-matri-deep/80 hover:bg-white/70 hover:text-matri-deep hover:shadow-md"
                        }`}
                        style={{
                          background:
                            location.pathname === item.path
                              ? "linear-gradient(135deg, #C11186 0%, #C11186 100%)"
                              : "transparent",
                        }}
                      >
                        <span>{item.label}</span>
                        {location.pathname === item.path && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 rounded-full bg-white"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 pb-8">
                  <motion.a
                    href="tel:+919984276035"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl border-2 border-matri-green text-matri-green font-semibold hover:bg-matri-green/10 transition-all duration-300 shadow-md"
                  >
                    <span className="text-xl">📞</span>
                    Call Now
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Link
                      to="/appointment"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center w-full px-6 py-4 rounded-2xl font-semibold text-white shadow-xl transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #7BAE7F 0%, #CDE3D2 100%)",
                      }}
                    >
                      Book Consultation
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile Footer */}
                <div className="text-center text-xs text-matri-deep/50 pb-6 border-t border-matri-green/20 pt-6">
                  <p>Vaidyagaon, Wazirganj, Gonda, UP</p>
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CallbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Add gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
};
