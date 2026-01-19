import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { PageHero } from "../components/PageHero";
import { SEO } from "../components/SEO";
import Button from "@mui/material/Button";

export function DiseasesPage() {
  const diseases = [
    {
      id: "pcos",
      name: "PCOS/PCOD",
      description: "Hormonal imbalance affecting ovaries",
      icon: "🌸",
      color: "from-rose-200 to-pink-300",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    },
    {
      id: "irregular-periods",
      name: "Irregular Periods",
      description: "Menstrual cycle disorders",
      icon: "🌺",
      color: "from-purple-200 to-lavender-300",
      image:
        "data:image/jpeg;base64,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i8NFAYvYu3l1MZgnQ44JGm4ZyoKpULiXO1cST1Jkqg0snAjUGR2zV49qMOLdE+kqctjXWDhh37PP+CSuW3exrMqbgYd/Kcj+/YLqAXE7qtGJpB1B9Dn+66rsrbPa2Zk6s8B/p0/4wlZm9p0bWn5fYl0REpkBERABERABERABERABERABERAFcBXprVHlrpW9SdOuSuTNWUbLQzELXtVGWlbDc16wyQCmK1KzK2aTmn3CRuIheX1WZhzHZ7iCZ6QrJa6IiZhQ7iIJxAR8dwCrcbHbTr59bFCvOiWPcM5B55b/ADWvZbRhIdGYM58lM35TZJc0mYzHEngoWzt3unsqjUV20zrF0WMNaHnVwnoDn5qXsrJM8FpXc7HTpkb2t000+Cl6bIEK6TSVkeXxE25O+56REVRyhERAEPgq/bcWE+zwYZ3RGLzxfFSLqjC/2ZgvDQ6CAfCSRPmFnXP6t94bea0+AOwH/wCseEn0xISOqlTde9uS9fEtO0dobRoOIABOQgCefpK27nthq0WPPvEeL+YZH1z7qt7cVSalKnujFyMnP4DzUjsxWw06mIw1vingIOL4JraXHlRX6ZS53v8AwVzbq6LOypTLKLGudjc8gRObYy04qq3pUinHEgfP5LbrbSutry5wDcMhv8he5zZ5gEDso++WEtBGgJnvv+uKnkbmHpzpxjCpujSu6theOByPf/MLpWwVph9SnxaHDq0wf+4eS5YxpJgZkroGxtQi10xxDwf9hPyULYjHwUqUvd9NTo6IiU8uEREAEREAEREAEREAEREAEREAV5tLiswYviLoNBtiFjqCTMmURDCJr12l2RP181XPZvdUeHSGN3TEk55xqviKqZ34aVrkHenhcYdOoM8dDuWhY2Y3tYc8TgBESSTAgnIIirWxpVJOKv4HbrBZ8DGggAhoBA0EACByWyiJrnj223dhERQQEREAal62n2dGo8atYSOsQPWFykMKInia/ZukJPxOjXKxlps1I1WBxaMMnUFvhyI4gArztVRDLBaW02gTScIHMQczylESs47tYjLyzbeZx67bO6mQY1IB00OX7eSngw8ERNF3PR1pNyPLaMaNA6QFYNibMTaQ7cxrj5+H+70RFL2OPFSfBl7joSIirPOhERABERABERABERABERABERAH/9k=",
    },
    {
      id: "fertility-issues",
      name: "Fertility Issues",
      description: "Conception and reproductive health",
      icon: "🤱",
      color: "from-emerald-200 to-teal-300",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: "menopause",
      name: "Menopause",
      description: "Natural transition management",
      icon: "🌅",
      color: "from-amber-200 to-orange-300",
      image:
        "https://labiaplastynewyorkcity.com/wp-content/uploads/2025/08/understanding-the-impact-of-menopause-on-sexual-health.jpg",
    },
    {
      id: "endometriosis",
      name: "Endometriosis",
      description: "Uterine tissue growth disorder",
      icon: "🌷",
      color: "from-red-200 to-rose-300",
      image:
        "https://www.insideprecisionmedicine.com/wp-content/uploads/2020/06/Endometriosis-1249064200-696x418.jpg",
    },
    {
      id: "fibroids",
      name: "Uterine Fibroids",
      description: "Non-cancerous uterine growths",
      icon: "🌹",
      color: "from-indigo-200 to-purple-300",
      image:
        "https://img.freepik.com/free-photo/medical-uterus-illustration_23-2148821153.jpg?w=740&t=st=1703123456~exp=1703124056~hmac=mno345",
    },
    {
      id: "thyroid",
      name: "Thyroid Disorders",
      description: "Hormonal gland imbalances",
      icon: "🦋",
      color: "from-cyan-200 to-blue-300",
      image:
        "https://medsoup.com/wp-content/uploads/2025/01/thyroid-illustration-neck-biopsy-surgical-1024x732-1.jpeg",
    },
    {
      id: "white-discharge",
      name: "White Discharge",
      description: "Vaginal health concerns",
      icon: "💧",
      color: "from-sky-200 to-cyan-300",
      image: "https://cdn.nuawoman.com/blog/DischargeCover.png",
    },
  ];

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Matricharya",
    "description": "Ayurvedic Women's Wellness Clinic specializing in PCOS, fertility, pregnancy care, and holistic women's health treatments.",
    "url": "https://matricharya.com/diseases",
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
      {
        "@type": "MedicalTherapy",
        "name": "PCOS/PCOD Treatment"
      },
      {
        "@type": "MedicalTherapy", 
        "name": "Fertility Care"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Pregnancy Support"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Menstrual Health"
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-x-hidden"
    >
      <SEO 
        title="Women's Health Conditions"
        description="Comprehensive Ayurvedic treatment for women's health conditions including PCOS, irregular periods, fertility issues, menopause, endometriosis, and more at Matricharya clinic."
        keywords="PCOS treatment, irregular periods, fertility ayurveda, menopause care, endometriosis treatment, women's health ayurveda, ayurvedic gynecology"
        canonical="/diseases"
        schema={clinicSchema}
      />
      <div className="pt-16 sm:pt-20">
        <PageHero
          icon="🌸"
          title="Women's Health Conditions"
          subtitle="Comprehensive Ayurvedic care for women's health concerns through natural and holistic healing."
        />

        <div className="mx-auto max-w-7xl space-y-16 px-6 pb-16">
          {/* Diseases Grid */}
          <Section className="py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {diseases.map((disease, index) => (
                <motion.div
                  key={disease.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="cursor-pointer"
                >
                  <Link to={`/diseases/${disease.id}`}>
                    <div
                      className={`relative overflow-hidden glass backdrop-blur-md rounded-3xl p-6 text-center shadow-xl border-2 border-pink-200/50 bg-gradient-to-br ${disease.color} hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="absolute inset-0 opacity-20">
                        <img
                          src={disease.image}
                          alt={disease.name}
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      </div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-4 filter drop-shadow-lg">
                          {disease.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-matri-deep mb-2 drop-shadow-sm">
                          {disease.name}
                        </h3>
                        <p className="text-matri-deep/80 text-sm font-medium">
                          {disease.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* CTA Section */}
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
                Need Personalized Treatment?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
                Our experienced Vaidyas provide customized Ayurvedic solutions
                for your specific health concerns.
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
                    Book Consultation 🌸
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
