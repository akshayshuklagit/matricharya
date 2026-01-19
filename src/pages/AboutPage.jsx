import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import matricharya_logo from "../assets/matricharya_logo.png";
import why_matricharya from "../assets/why_matricharya.jpeg";
import about_matrichrya from "../assets/about_matricharya.jpeg";
import { Section } from "../components/layout/Section";
import { PageHero } from "../components/PageHero";
import { SEO } from "../components/SEO";
import {
  Heart,
  Baby,
  User,
  Users,
  Scale,
  Utensils,
  MapPin,
  Building,
  Clock,
  Monitor,
  Flower2,
  Info,
} from "lucide-react";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";
import { Link } from "react-router-dom";

export function AboutPage() {
  const doctors = [
    {
      name: "Vaidya Abhay Mishra",
      qualification: "BAMS (Ayurvedacharya)",

      image: doctor1,
    },
    {
      name: "Dr. Shilpa Pandey",
      qualification: "BAMS (Ayurvedacharya)",

      image: doctor2,
    },
  ];

  const specializations = [
    {
      icon: Heart,
      title: "Menstrual Health",
      desc: "Cycle regulation & period wellness",
    },
    {
      icon: Baby,
      title: "Fertility Care",
      desc: "Preconception support & natural conception",
    },
    {
      icon: User,
      title: "Pregnancy Care",
      desc: "Garbhini Paricharya - trimester guidance",
    },
    {
      icon: Users,
      title: "Postnatal Recovery",
      desc: "Sutika Paricharya - complete restoration",
    },
    {
      icon: Scale,
      title: "Hormonal Balance",
      desc: "PCOS/PCOD management naturally",
    },
    {
      icon: Utensils,
      title: "Lifestyle Guidance",
      desc: "Diet, routine & wellness coaching",
    },
  ];

  const philosophy = [
    "Holistic, root-cause healing approach",
    "Individualised care based on Prakriti",
    "Respect for body, mind, and emotions",
    "Gentle, non-invasive treatments",
    "Long-term wellness, not quick fixes",
    "Education and empowerment focused",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-x-hidden"
    >
      <SEO 
        title="About Matricharya"
        description="Learn about Matricharya, a dedicated Ayurvedic women's wellness clinic. Discover our philosophy, approach, and expert Vaidyas specializing in women's health."
        keywords="about matricharya, ayurvedic women's clinic, women's wellness, ayurvedic philosophy, expert vaidyas, holistic care"
        canonical="/about"
      />
      <div className="pt-16 sm:pt-20">
        <PageHero
          icon={<Flower2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
          title="About Matricharya"
          subtitle="Nurturing women's wellness through authentic Ayurvedic wisdom and compassionate care."
        />

        <div className="mx-auto mt-12 max-w-7xl space-y-20 px-6 pb-16">
          {/* About Matricharya - Intro */}
          <Section className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl text-matri-deep">
                About Matricharya
              </h2>
              <div className="space-y-4 text-lg text-matri-deep/80 leading-relaxed">
                <p>
                  Matricharya is a dedicated Ayurvedic gynaecology and women's
                  wellness clinic focused on supporting women through every
                  stage of life — from menstrual health and fertility to
                  pregnancy and postnatal care.
                </p>
                <p>
                  What makes us unique is our deep commitment to classical
                  Ayurvedic principles combined with modern understanding,
                  creating a safe and nurturing environment where women feel
                  heard, respected, and genuinely cared for.
                </p>
                <p>
                  Located in the serene environment of Vaidyagaon, Wazirganj,
                  Gonda (Uttar Pradesh), our clinic provides a peaceful
                  sanctuary for healing and wellness, away from the rush of
                  urban healthcare.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1Jw2-e77Ft-OsdRruFJisDE9NZjdqFSX2Q&s"
                src={about_matrichrya}
                alt="Ayurvedic wellness center"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </Section>

          {/* The Meaning of Matricharya */}
          <Section
            className="py-16 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, #f8f4f0 0%, #fdf2f8 50%, #f0fdf4 100%)",
            }}
          >
            <div className="px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-4xl lg:text-5xl text-matri-deep mb-6">
                  The Meaning of "Matricharya"
                </h2>
                <p className="text-xl text-matri-deep/70 max-w-3xl mx-auto">
                  Understanding the profound wisdom behind our name
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center glass backdrop-blur-md rounded-2xl p-8"
                >
                  <div className="text-6xl mb-4">🤱</div>
                  <h3 className="text-2xl font-semibold text-matri-deep mb-4">
                    "Matri"
                  </h3>
                  <p className="text-matri-deep/80">
                    Meaning "Mother" - representing the divine feminine energy
                    and the sacred role of motherhood in creating and nurturing
                    life.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center glass backdrop-blur-md rounded-2xl p-8"
                >
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="text-2xl font-semibold text-matri-deep mb-4">
                    "Charya"
                  </h3>
                  <p className="text-matri-deep/80">
                    Meaning "Regimen" or "Disciplined Care" - the systematic,
                    thoughtful approach to wellness that Ayurveda prescribes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center glass backdrop-blur-md rounded-2xl p-8"
                >
                  <div className="text-6xl mb-4">🕉️</div>
                  <h3 className="text-2xl font-semibold text-matri-deep mb-4">
                    Ancient Wisdom
                  </h3>
                  <p className="text-matri-deep/80">
                    Classical Ayurveda views women's health as the foundation of
                    family and society wellness, deserving specialized,
                    respectful care.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center mt-12"
              >
                <p className="text-lg text-matri-deep/80 max-w-4xl mx-auto leading-relaxed">
                  Together, "Matricharya" embodies the ancient concept of
                  nurturing life from its very beginning - honoring the mother's
                  journey with disciplined, compassionate care rooted in
                  timeless Ayurvedic wisdom.
                </p>
              </motion.div>
            </div>
          </Section>

          {/* Our Philosophy & Values */}
          <Section className="py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl text-matri-deep mb-8">
                  The Matricharya Way
                </h2>
                <div className="space-y-4">
                  {philosophy.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 glass backdrop-blur-md rounded-xl p-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-matri-green"></div>
                      <p className="text-matri-deep/80">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=500&fit=crop"
                  alt="Ayurvedic herbs and wellness"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </Section>

          {/* What We Specialise In */}
          <Section className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl lg:text-5xl text-matri-deep mb-4">
                What We Specialise In
              </h2>
              <p className="text-lg text-matri-deep/70 max-w-2xl mx-auto">
                Comprehensive Ayurvedic care for every aspect of women's
                wellness
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-matri-deep mb-2">
                    {item.title}
                  </h3>
                  <p className="text-matri-deep/70 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Treatment Approach */}
          <Section className="py-16 glass backdrop-blur-md rounded-3xl">
            <div className="px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-4xl text-matri-deep mb-4">
                  Our Treatment Approach
                </h2>
                <p className="text-lg text-matri-deep/70 max-w-2xl mx-auto">
                  A systematic, personalized journey to wellness
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Assessment",
                    desc: "Comprehensive Ayurvedic diagnosis & Prakriti analysis",
                  },
                  {
                    step: "02",
                    title: "Planning",
                    desc: "Personalized treatment plan based on individual needs",
                  },
                  {
                    step: "03",
                    title: "Treatment",
                    desc: "Gentle therapies, herbs & lifestyle modifications",
                  },
                  {
                    step: "04",
                    title: "Support",
                    desc: "Continuous follow-ups & ongoing wellness guidance",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center bg-white/50 rounded-2xl p-6"
                  >
                    <div className="text-4xl font-light text-matri-green/40 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-matri-deep mb-2">
                      {item.title}
                    </h3>
                    <p className="text-matri-deep/70 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Why Women Trust Matricharya */}
          <Section className="py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={why_matricharya}
                  alt="Trusted women's healthcare"
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
                  Why Women Trust Matricharya
                </h2>
                <div className="space-y-4">
                  {[
                    "Patient-first care with genuine compassion",
                    "Confidential & respectful consultations",
                    "Classical Ayurveda meets practical solutions",
                    "Supportive environment designed for women",
                    "Focus on education and empowerment",
                    "Long-term wellness partnerships",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-matri-green"></div>
                      <p className="text-matri-deep/80">{item}</p>
                    </motion.div>
                  ))}
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
                Start Your Wellness Journey Today
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
                At Matricharya, we believe that when a woman is cared for with
                understanding and respect, generations benefit.
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
