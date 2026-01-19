import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Card } from "../components/ui/card";
import { Section } from "../components/layout/Section";
import { SEO } from "../components/SEO";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";
import homebanner from "../assets/homebanner.png";
import {
  Leaf,
  UserCheck,
  Hospital,
  HeartPulse,
  Activity,
  Calendar,
  Baby,
  RefreshCw,
  Flower2,
} from "lucide-react";

export function HomePage() {
  const doctorItems = [
    {
      image: doctor1,
      title: "Vaidya Abhay Mishra",
      subtitle: "BAMS (Ayurvedacharya)",
      handle: "Fertility & Cancer Expert",

      borderColor: "#7BAE7F",
    },
    {
      image: doctor2,
      title: "Dr. Shilpa Pandey",
      subtitle: "BAMS (Ayurvedacharya)",
      handle: "Director of Matricharya",
      borderColor: "#FDE6EB",
    },
  ];

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Matricharya",
    "description": "Ayurvedic Women's Wellness Clinic specializing in menstrual health, fertility, pregnancy care, and holistic women's health treatments.",
    "url": "https://matricharya.com",
    "telephone": "+91-7711761340",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vaidyagaon, Wazirganj",
      "addressLocality": "Gonda",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "medicalSpecialty": "Ayurvedic Gynecology",
    "availableService": [
      {"@type": "MedicalTherapy", "name": "PCOS/PCOD Treatment"},
      {"@type": "MedicalTherapy", "name": "Fertility Care"},
      {"@type": "MedicalTherapy", "name": "Pregnancy Support"},
      {"@type": "MedicalTherapy", "name": "Menstrual Health"}
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-x-hidden">
      <SEO 
        title="Ayurvedic Women's Wellness Clinic"
        description="Matricharya is a dedicated Ayurvedic women's health clinic offering natural treatments for PCOS, fertility, pregnancy care, and holistic wellness in Gonda, UP."
        keywords="ayurvedic clinic, women's health, PCOS treatment, fertility ayurveda, pregnancy care, menstrual health, ayurvedic gynecology, Gonda UP"
        canonical="/"
        schema={clinicSchema}
      />
      <div className="pt-15">
        {/* Hero Section - Full Width */}
        <Section
          className="relative overflow-hidden grid items-center gap-8 lg:gap-12 px-4 sm:px-8 py-8 sm:py-12 shadow-xl lg:grid-cols-2 min-h-[70vh] sm:min-h-[80vh] w-full"
          style={{
            // background: "#F6A8DF",
            background: `linear-gradient(135 deg ,#fbcfe8 0%,#fde7f3 50%,#ffffff 100%)`,
          }}
        >
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-matri-deep/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Women's Online Ayurveda Clinic
            </motion.p>
            <motion.h1
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-pink-500 bg-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Rooted in Ayurveda, Dedicated to Women's Wellness.
            </motion.h1>
            <motion.p
              className="text-base lg:text-lg text-matri-deep/100 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Matricharya is a modern Ayurvedic women's health and gynaecology
              clinic dedicated to period health, fertility, pregnancy and
              postnatal care through authentic Ayurveda.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link to="/appointment">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 4,
                    py: 2,
                    fontSize: "1.1rem",
                    background:
                      "linear-gradient(45deg, #7BAE7F 30%, #CDE3D2 90%)",
                    boxShadow: "0 4px 15px 2px rgba(123, 174, 127, .3)",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #6A9D6F 30%, #BDD3C2 90%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px 2px rgba(123, 174, 127, .4)",
                    },
                  }}
                >
                  Book Matricharya consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.img
              src={homebanner}
              alt="Matricharya illustration"
              className="relative z-0 h-64 w-64 sm:h-130 sm:w-180 max-w-xs sm:max-w-lg xl:max-w-xl opacity-90 mx-auto"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </Section>

        <div className="mx-auto max-w-7xl space-y-16 px-6 pb-16">
          {/* Matricharya Focus */}
          <Section className="relative rounded-3xl glass backdrop-blur-md px-8 py-12 shadow-xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl text-matri-deep bg-gradient-to-r from-matri-deep via-matri-green to-matri-deep bg-clip-text text-transparent">
                  Matricharya Focus
                </h2>
                <p className="text-lg lg:text-xl text-matri-deep font-medium leading-relaxed">
                  "Empowering every woman to experience Happy Menses, a Healthy
                  Womb, and healthy motherhood through Ayurveda."
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex justify-center"
              >
                <Card className="space-y-4 rounded-3xl border-matri-softGreen/70 glass backdrop-blur-md p-6 lg:p-8 shadow-xl max-w-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-matri-deep/60 text-center">
                    Matricharya focus
                  </p>
                  <div className="grid gap-3 text-sm">
                    <motion.div
                      className="rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-300 px-4 py-3 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="font-semibold text-matri-deep">
                        Preconception
                      </p>
                      <p className="text-matri-deep/70">Santan Yogya Shakti</p>
                    </motion.div>
                    <motion.div
                      className="rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300 px-4 py-3 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="font-semibold text-matri-deep">Pregnancy</p>
                      <p className="text-matri-deep/70">
                        Month-wise Matricharya
                      </p>
                    </motion.div>
                    <motion.div
                      className="rounded-2xl bg-gradient-to-br from-amber-200 to-amber-300 px-4 py-3 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="font-semibold text-matri-deep">Postnatal</p>
                      <p className="text-matri-deep/70">
                        Sutika care and lactation
                      </p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-base lg:text-lg text-matri-deep/80 leading-relaxed">
                  Comprehensive Ayurvedic solutions for menstrual health,
                  fertility, pregnancy and overall women wellness through
                  authentic traditional practices.
                </p>
                <div className="grid gap-2 text-sm text-matri-deep/70">
                  <p>✓ Cycle harmony & fertility support</p>
                  <p>✓ Pregnancy & postpartum restoration</p>
                  <p>✓ Ayurveda lifestyle guidance</p>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Why Matricharya */}
          <Section className="py-16 bg-gradient-to-b from-matri-soft/40 to-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold 
      bg-gradient-to-r from-matri-deep via-matri-green to-matri-deep 
      bg-clip-text text-transparent mb-4"
              >
                Why Choose Matricharya?
              </h2>

              <p className="text-lg text-matri-deep/70 max-w-2xl mx-auto">
                Authentic Ayurvedic care designed exclusively for women’s health
              </p>

              <div className="mt-6 h-1 w-16 bg-matri-green rounded-full mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Leaf,
                  title: "Classical Ayurveda",
                  description:
                    "Rooted in authentic Samhita-based gynaecology principles",
                },
                {
                  icon: UserCheck,
                  title: "Expert Vaidyas",
                  description:
                    "Experienced practitioners specializing in women’s health",
                },
                {
                  icon: Hospital,
                  title: "Modern Clinic",
                  description:
                    "Premium facilities with a traditional healing approach",
                },
                {
                  icon: HeartPulse,
                  title: "Holistic Care",
                  description: "Complete wellness from menarche to menopause",
                },
              ].map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white/80 backdrop-blur-md rounded-2xl p-6 
          text-center shadow-md hover:shadow-xl 
          transition-all duration-300 border border-matri-soft"
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-4 rounded-full 
            bg-pink-100 flex items-center justify-center"
                    >
                      <Icon className="w-7 h-7 text-pink-500" />
                    </div>

                    <h3 className="font-semibold text-lg text-matri-deep mb-2">
                      {reason.title}
                    </h3>

                    <p className="text-matri-deep/70 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Section>

          {/* Conditions We Treat */}
          {/* Conditions We Treat */}
          <Section className="py-20 bg-gradient-to-b from-white to-matri-soft/50">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2
                  className="font-display text-4xl lg:text-5xl font-semibold
        bg-gradient-to-r from-matri-deep via-matri-green to-matri-deep
        bg-clip-text text-transparent mb-6"
                >
                  Conditions We Treat
                </h2>

                <p className="text-lg text-matri-deep/70 mb-6 max-w-md">
                  Comprehensive Ayurvedic solutions tailored for every stage of
                  womanhood.
                </p>

                <div className="h-1 w-20 bg-matri-green rounded-full" />
              </motion.div>

              {/* Right Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: Activity,
                    name: "PCOS / PCOD",
                    description: "Restoring hormonal balance naturally",
                  },
                  {
                    icon: Calendar,
                    name: "Irregular Periods",
                    description: "Menstrual cycle regulation therapy",
                  },
                  {
                    icon: HeartPulse,
                    name: "Fertility Issues",
                    description: "Ayurvedic support for natural conception",
                  },
                  {
                    icon: Baby,
                    name: "Pregnancy Care",
                    description: "Trimester-wise maternal guidance",
                  },
                  {
                    icon: RefreshCw,
                    name: "Postpartum Recovery",
                    description: "Sutika paricharya & strength restoration",
                  },
                  {
                    icon: Flower2,
                    name: "Menopause Support",
                    description: "Balanced transition with holistic care",
                  },
                ].map((condition, index) => {
                  const Icon = condition.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="bg-white/80 backdrop-blur-md rounded-2xl p-5
            border border-matri-soft shadow-sm hover:shadow-lg
            transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl bg-pink-100 
                flex items-center justify-center shrink-0"
                        >
                          <Icon className="w-6 h-6 text-pink-500" />
                        </div>

                        <div>
                          <h3 className="font-semibold text-matri-deep mb-1">
                            {condition.name}
                          </h3>
                          <p className="text-sm text-matri-deep/70 leading-relaxed">
                            {condition.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Section>

          {/* Our Approach */}
          <Section className="py-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl lg:text-5xl text-matri-deep bg-gradient-to-r from-matri-deep via-matri-green to-matri-deep bg-clip-text text-transparent mb-4">
                Our Approach
              </h2>
              <p className="text-matri-deep/70 max-w-2xl mx-auto">
                A thoughtful, step-by-step Ayurvedic journey designed for every
                woman.
              </p>
            </motion.div>

            {/* GRID + CONNECTOR */}
            <div className="relative">
              {/* CONNECTOR LINES */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 z-0">
                <div className="flex justify-between items-center px-[16.66%]">
                  <div className="w-1/3 h-0.5 bg-gradient-to-r from-matri-green to-matri-softGreen"></div>
                  <div className="w-1/3 h-0.5 bg-gradient-to-r from-matri-softGreen to-matri-green"></div>
                </div>
              </div>

              {/* CONNECTOR DOTS */}
              <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-between items-center px-[16.66%] z-10">
                <div className="w-4 h-4 rounded-full bg-matri-green shadow-lg border-2 border-white"></div>
                <div className="w-4 h-4 rounded-full bg-matri-green shadow-lg border-2 border-white"></div>
                <div className="w-4 h-4 rounded-full bg-matri-green shadow-lg border-2 border-white"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative z-20">
                {[
                  {
                    step: "01",
                    title: "Assessment",
                    description:
                      "Comprehensive dosha analysis, cycle health, digestion, and vitality evaluation.",
                  },
                  {
                    step: "02",
                    title: "Treatment",
                    description:
                      "Personalised Ayurvedic therapies, medicines, and care protocols.",
                  },
                  {
                    step: "03",
                    title: "Lifestyle",
                    description:
                      "Ongoing guidance on diet, daily routine, stress balance, and long-term wellbeing.",
                  },
                ].map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center glass backdrop-blur-md rounded-3xl px-8 py-10 shadow-lg bg-white/40"
                  >
                    <div className="text-6xl font-light text-matri-green/30 mb-4">
                      {approach.step}
                    </div>
                    <h3 className="text-2xl font-semibold text-matri-deep mb-4">
                      {approach.title}
                    </h3>
                    <p className="text-matri-deep/70">{approach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Doctor Introduction */}
          <Section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl lg:text-5xl text-matri-deep bg-gradient-to-r from-matri-deep via-matri-green to-matri-deep bg-clip-text text-transparent mb-4">
                Meet Our Vaidyas
              </h2>
              <p className="text-lg text-matri-deep/80 max-w-2xl mx-auto">
                Expert Ayurvedic practitioners dedicated to women's wellness
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {doctorItems.map((doctor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass backdrop-blur-md rounded-3xl p-8 shadow-xl border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/80 to-rose-50/80"
                >
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <img
                        src={doctor.image}
                        alt={doctor.title}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-pink-200 shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🌸</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-matri-deep">
                        {doctor.title}
                      </h3>
                      <p className="text-pink-600 font-medium">
                        {doctor.subtitle}
                      </p>
                      <p className="text-sm text-matri-deep/70">
                        {doctor.handle}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link to="/appointment">
                        <Button
                          variant="contained"
                          size="medium"
                          sx={{
                            borderRadius: 999,
                            textTransform: "none",
                            fontWeight: 600,
                            px: 4,
                            py: 1.5,
                            fontSize: "0.9rem",
                            background:
                              "linear-gradient(45deg, #ec4899 30%, #f472b6 90%)",
                            boxShadow: "0 4px 15px 2px rgba(236, 72, 153, .3)",
                            "&:hover": {
                              background:
                                "linear-gradient(45deg, #db2777 30%, #ec4899 90%)",
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          Book Appointment
                        </Button>
                      </Link>
                      <Link to="/doctors">
                        <Button
                          variant="outlined"
                          size="medium"
                          sx={{
                            borderRadius: 999,
                            textTransform: "none",
                            fontWeight: 600,
                            px: 4,
                            py: 1.5,
                            fontSize: "0.9rem",
                            borderColor: "#ec4899",
                            color: "#ec4899",
                            "&:hover": {
                              borderColor: "#db2777",
                              color: "#db2777",
                              backgroundColor: "rgba(236, 72, 153, 0.1)",
                            },
                          }}
                        >
                          More Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Testimonials */}
          <Section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl lg:text-5xl text-matri-deep bg-gradient-to-r from-matri-deep via-matri-green to-matri-deep bg-clip-text text-transparent mb-4">
                What Our Patients Say
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya S.",
                  text: "Matricharya helped me regulate my cycles naturally. The doctors are very caring and knowledgeable.",
                },
                {
                  name: "Anjali M.",
                  text: "Best pregnancy care I received. The Ayurvedic approach made my journey smooth and healthy.",
                },
                {
                  name: "Kavita R.",
                  text: "After struggling with PCOS for years, I finally found relief through their holistic treatment.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass backdrop-blur-md rounded-xl p-6 border border-white/20"
                >
                  <div className="text-4xl text-matri-green mb-4">"</div>
                  <p className="text-matri-deep/80 mb-4 italic">
                    {testimonial.text}
                  </p>
                  <p className="font-semibold text-matri-deep">
                    - {testimonial.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Final CTA */}
          <Section
            className="relative overflow-hidden py-16 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #a855f7 100%)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center glass backdrop-blur-md rounded-3xl p-12 border-2 border-white/30 bg-white/10"
            >
              <h2 className="font-display text-4xl lg:text-5xl text-white mb-6 drop-shadow-lg">
                Start Your Wellness Journey Today
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
                Take the first step towards natural healing and holistic
                wellness with Matricharya's expert Ayurvedic care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/appointment">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: 999,
                      textTransform: "none",
                      fontWeight: 600,
                      px: 6,
                      py: 2.5,
                      fontSize: "1.1rem",
                      background: "rgba(255, 255, 255, 0.9)",
                      color: "#ec4899",
                      boxShadow: "0 4px 15px 2px rgba(255, 255, 255, .3)",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 1)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px 2px rgba(255, 255, 255, .4)",
                      },
                    }}
                  >
                    Book Your Consultation 🌸
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 6,
                    py: 2.5,
                    fontSize: "1.1rem",
                    borderColor: "rgba(255, 255, 255, 0.8)",
                    color: "rgba(255, 255, 255, 0.9)",
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 1)",
                      color: "rgba(255, 255, 255, 1)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </Section>
        </div>
      </div>
    </div>
  );
}
