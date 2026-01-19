import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Section } from "../components/layout/Section";
import { PageHero } from "../components/PageHero";
import { Scroll, Award, Heart, Users, Calendar, Shield } from "lucide-react";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";

export function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Shilpa Pandey",
      title: "Director Matricharya Wellness",
      qualification: "BAMS (Ayurveda Gynaecologist)",
      image: doctor2,
      bio: "Dr. Shilpa Pandey is a dedicated Ayurveda physician (B.A.M.S.) with a special focus on women’s health, reproductive wellness, and holistic healing. She combines the timeless wisdom of classical Ayurvedic texts with compassionate clinical practice.",
      philosophy:
        "Rooted in the principles of Ayurveda Samhita, I believe that a woman’s health is the foundation of a healthy family and society. My approach focuses on understanding each individual’s Prakriti (body constitution), correcting Dosha imbalances, and addressing the root cause of disease rather than merely suppressing symptoms.",
      focusAreas: [
        "PCOD & menstrual disorders",
        "InFertility & Pre-Conception Care",
        "Lifestyle & Preventive Ayurveda",
        "Pregnancy & Post-Natal Care",
      ],
    },
    {
      id: 2,
      name: "Vaidya Abhay Mishra",
      title: "4th Generation Vaidya",
      qualification: "BAMS (AyurvedaCharya)",
      image: doctor1,
      bio: "4th generation Vaidya, global Ayurveda practitioner. Rooted in a strong ancestral lineage and guided by Gurus and divine grace, his work integrates clinical excellence, spiritual discipline, and social responsibility.",
      philosophy:
        "I believe Ayurveda is a complete and eternal medical science rooted in the Samhitas and Guru-parampara. As a Vaidya, my duty is to treat the root cause of disease, restore balance of Dosha, Agni, Dhatu, and Ojas, and guide patients toward a disciplined, dharmic way of life. Healing is not merely treatment—it is seva, sadhana, and responsibility toward society and nature.",
      focusAreas: [
        "Male & Female Infertility",
        "Cancer & Prevention",
        "Lifestyle Disorder",
        "Women’s Health & Matricharya",
      ],
    },
  ];

  const expertiseAreas = [
    "Menstrual disorders & cycle regulation",
    "PCOS / PCOD management",
    "Fertility & preconception care",
    "Garbhini Paricharya (pregnancy care)",
    "Sutika Paricharya (postnatal care)",
    "Hormonal balance & wellness",
    "Lifestyle & diet counselling",
    "Ayurvedic diagnosis & constitution assessment",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-x-hidden"
    >
      <div className="pt-16 sm:pt-20">
        <PageHero
          icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
          title="Meet Our Vaidyas"
          subtitle="Expert Ayurvedic practitioners dedicated to women's wellness with authentic healing relationships."
        />
        <div className="mx-auto max-w-7xl space-y-16 px-6 pb-16">
          {/* Doctors Listing */}
          <Section className="space-y-12">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/80 to-rose-50/80"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Doctor Photo & Basic Info */}
                  <motion.div
                    className="text-center lg:text-left"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl mx-auto lg:mx-0 mb-6 object-cover border-4 border-pink-200 shadow-xl"
                    />
                    <div className="space-y-2">
                      <h2 className="font-display text-2xl lg:text-3xl text-matri-deep font-semibold">
                        {doctor.name}
                      </h2>
                      <p className="text-pink-600 font-semibold text-lg">
                        {doctor.title}
                      </p>
                      <p className="text-matri-deep/70 font-medium">
                        {doctor.qualification}
                      </p>
                      <p className="text-matri-deep/60">{doctor.experience}</p>
                    </div>
                  </motion.div>

                  {/* Doctor Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Bio */}
                    <div>
                      <h3 className="text-xl font-semibold text-matri-deep mb-3">
                        About
                      </h3>
                      <p className="text-matri-deep/80 leading-relaxed">
                        {doctor.bio}
                      </p>
                    </div>

                    {/* Philosophy */}
                    <div className="bg-pink-50/80 rounded-2xl p-6 border border-pink-200/50">
                      <h3 className="text-xl font-semibold text-matri-deep mb-3">
                        Care Philosophy
                      </h3>
                      <p className="text-matri-deep/80 leading-relaxed italic">
                        "{doctor.philosophy}"
                      </p>
                    </div>

                    {/* Focus Areas */}
                    <div>
                      <h3 className="text-xl font-semibold text-matri-deep mb-4">
                        Areas of Focus
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {doctor.focusAreas.map((area, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 bg-white/50 rounded-xl p-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                            <p className="text-matri-deep/80 text-sm">{area}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Book Appointment Button */}
                    <div className="pt-4">
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
                            background:
                              "linear-gradient(45deg, #ec4899 30%, #f472b6 90%)",
                            boxShadow: "0 4px 15px 2px rgba(236, 72, 153, .3)",
                            "&:hover": {
                              background:
                                "linear-gradient(45deg, #db2777 30%, #ec4899 90%)",
                              transform: "translateY(-2px)",
                              boxShadow:
                                "0 6px 20px 2px rgba(236, 72, 153, .4)",
                            },
                          }}
                        >
                          Book Consultation with {doctor.name.split(" ")[0]}{" "}
                          {doctor.name.split(" ")[1]}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Section>

          {/* Areas of Expertise */}
          <Section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl lg:text-5xl text-matri-deep mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-matri-deep/70 max-w-2xl mx-auto">
                Comprehensive Ayurvedic care across all aspects of women's
                health
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass backdrop-blur-md rounded-2xl p-6 text-center border border-pink-200/50 bg-gradient-to-br from-pink-50/60 to-rose-50/60"
                >
                  <div className="w-3 h-3 rounded-full bg-pink-400 mx-auto mb-3"></div>
                  <p className="text-matri-deep/80 font-medium text-sm">
                    {area}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Credentials & Ethics Statement */}
          <Section
            className="py-16 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, #f8f4f0 0%, #fdf2f8 50%, #f0fdf4 100%)",
            }}
          >
            <div className="px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl text-matri-deep mb-8">
                  Our Commitment to Excellence
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-lg text-matri-deep/80 leading-relaxed">
                    Our doctors follow classical Ayurvedic texts, ethical
                    clinical practices, and personalised diagnosis. Treatments
                    are tailored to the individual and no exaggerated or
                    guaranteed claims are made.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="glass backdrop-blur-md rounded-2xl p-6 border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/60 to-rose-50/60"
                    >
                      <Scroll className="w-8 h-8 text-pink-500 mb-3 mx-auto" />
                      <h3 className="font-semibold text-matri-deep mb-2">
                        Classical Treatment
                      </h3>
                      <p className="text-matri-deep/70 text-sm">
                        Rooted in authentic Ayurvedic texts and traditional
                        lineage
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="glass backdrop-blur-md rounded-2xl p-6 border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/60 to-rose-50/60"
                    >
                      <Shield className="w-8 h-8 text-pink-500 mb-3 mx-auto" />
                      <h3 className="font-semibold text-matri-deep mb-2">
                        Ethical Practice
                      </h3>
                      <p className="text-matri-deep/70 text-sm">
                        Honest, transparent care with realistic expectations
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="glass backdrop-blur-md rounded-2xl p-6 border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/60 to-rose-50/60"
                    >
                      <Heart className="w-8 h-8 text-pink-500 mb-3 mx-auto" />
                      <h3 className="font-semibold text-matri-deep mb-2">
                        Women-Focused
                      </h3>
                      <p className="text-matri-deep/70 text-sm">
                        Specialized understanding of women's unique health needs
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Experience Highlights */}
          <Section className="py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                  alt="Experienced Ayurvedic practitioners"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="font-display text-4xl text-matri-deep">
                  Experience You Can Trust
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-matri-deep">
                        Years Legacy Of Ayurveda
                      </h3>
                      <p className="text-matri-deep/70 text-sm">
                        In women's health Ayurveda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-matri-deep">
                        Women Helped
                      </h3>
                      <p className="text-matri-deep/70 text-sm">
                        Across Globally & nearby regions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-matri-deep">
                        Dedicated Care
                      </h3>
                      <p className="text-matri-deep/70 text-sm">
                        Personalized treatment for every patient
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                Ready to Begin Your Wellness Journey?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
                Book a consultation with our experienced Vaidyas and take the first step towards natural healing.
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
    </motion.div>
  );
}
