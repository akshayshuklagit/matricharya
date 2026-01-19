import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Section } from "../components/layout/Section";
import Button from "@mui/material/Button";

export function DiseaseDetailPage() {
  const { diseaseId } = useParams();

  const diseaseData = {
    "pcos": {
      name: "PCOS/PCOD",
      fullName: "Polycystic Ovary Syndrome/Polycystic Ovarian Disease",
      icon: "🌸",
      description: "A hormonal disorder affecting women of reproductive age, characterized by irregular periods, excess androgen levels, and polycystic ovaries.",
      symptoms: [
        "Irregular or missed periods",
        "Excess hair growth on face and body",
        "Weight gain or difficulty losing weight",
        "Acne and oily skin",
        "Hair thinning or male-pattern baldness",
        "Insulin resistance"
      ],
      ayurvedicView: "In Ayurveda, PCOS is understood as an imbalance of Kapha and Vata doshas, leading to improper metabolism and hormonal disruption. The condition is called 'Artava Kshaya' or 'Granthi' in classical texts.",
      treatment: [
        "Panchakarma detoxification therapies",
        "Herbal medicines like Shatavari, Ashoka, Lodhra",
        "Dietary modifications based on Prakriti",
        "Yoga and pranayama for hormonal balance",
        "Lifestyle counseling for weight management"
      ],
      prevention: [
        "Regular exercise and yoga practice",
        "Balanced diet with low glycemic foods",
        "Stress management techniques",
        "Adequate sleep and rest",
        "Regular health check-ups"
      ]
    },
    "irregular-periods": {
      name: "Irregular Periods",
      fullName: "Menstrual Cycle Disorders",
      icon: "📅",
      description: "Variations in menstrual cycle length, flow, or timing that deviate from normal patterns.",
      symptoms: [
        "Cycles shorter than 21 days or longer than 35 days",
        "Missing periods for several months",
        "Very heavy or very light bleeding",
        "Bleeding between periods",
        "Severe menstrual cramps",
        "Mood changes during cycles"
      ],
      ayurvedicView: "Known as 'Artava Vyapad' in Ayurveda, irregular periods result from imbalanced doshas affecting the reproductive system. Vata dosha imbalance is primarily responsible for irregularity.",
      treatment: [
        "Ayurvedic medicines like Pushyanuga Churna, Ashokarishta",
        "Abhyanga (oil massage) therapy",
        "Specific yoga asanas for reproductive health",
        "Dietary recommendations based on dosha",
        "Herbal decoctions and tonics"
      ],
      prevention: [
        "Maintain regular sleep schedule",
        "Practice stress-reducing activities",
        "Follow a balanced, nutritious diet",
        "Regular moderate exercise",
        "Avoid excessive dieting or weight fluctuations"
      ]
    },
    "fertility-issues": {
      name: "Fertility Issues",
      fullName: "Reproductive Health and Conception Challenges",
      icon: "🤱",
      description: "Difficulties in conceiving naturally, affecting both physical and emotional well-being of couples.",
      symptoms: [
        "Inability to conceive after 12 months of trying",
        "Irregular ovulation patterns",
        "Hormonal imbalances",
        "Previous pregnancy losses",
        "Age-related fertility decline",
        "Underlying reproductive disorders"
      ],
      ayurvedicView: "Ayurveda emphasizes 'Garbhadhana Samskara' - the science of conception. Fertility issues arise from imbalanced doshas, poor Ojas (vital essence), and inadequate reproductive tissue (Shukra dhatu) quality.",
      treatment: [
        "Preconception Panchakarma for both partners",
        "Rasayana therapy for reproductive enhancement",
        "Specialized herbs like Shatavari, Ashwagandha, Kapikacchu",
        "Garbhadhana counseling and timing",
        "Stress management and meditation practices"
      ],
      prevention: [
        "Maintain optimal body weight",
        "Follow fertility-enhancing diet",
        "Regular detoxification practices",
        "Avoid smoking and excessive alcohol",
        "Practice fertility yoga and meditation"
      ]
    },
    "menopause": {
      name: "Menopause",
      fullName: "Natural Reproductive Transition",
      icon: "🌅",
      description: "The natural biological process marking the end of menstrual cycles, typically occurring in women's 40s or 50s.",
      symptoms: [
        "Hot flashes and night sweats",
        "Irregular periods before cessation",
        "Mood changes and irritability",
        "Sleep disturbances",
        "Vaginal dryness",
        "Decreased bone density"
      ],
      ayurvedicView: "Called 'Rajonivrutti' in Ayurveda, menopause is a natural Vata-predominant phase of life. The transition requires balancing increased Vata while supporting overall vitality.",
      treatment: [
        "Hormone-balancing herbal formulations",
        "Rejuvenative therapies (Rasayana)",
        "Specific Panchakarma treatments",
        "Calcium and bone-strengthening herbs",
        "Meditation and stress management"
      ],
      prevention: [
        "Early adoption of healthy lifestyle",
        "Regular exercise including weight-bearing activities",
        "Calcium-rich diet and supplements",
        "Stress management practices",
        "Regular health monitoring"
      ]
    },
    "endometriosis": {
      name: "Endometriosis",
      fullName: "Endometrial Tissue Growth Disorder",
      icon: "🩺",
      description: "A condition where tissue similar to the uterine lining grows outside the uterus, causing pain and potentially affecting fertility.",
      symptoms: [
        "Severe menstrual cramps",
        "Chronic pelvic pain",
        "Pain during intercourse",
        "Heavy menstrual bleeding",
        "Infertility issues",
        "Digestive problems during periods"
      ],
      ayurvedicView: "Understood as 'Garbhashaya Granthi' in Ayurveda, endometriosis results from vitiated Kapha and Rakta (blood tissue), leading to abnormal tissue growth and inflammation.",
      treatment: [
        "Anti-inflammatory herbal medicines",
        "Detoxification therapies to clear Ama",
        "Pain-relieving Ayurvedic formulations",
        "Specialized Panchakarma treatments",
        "Dietary modifications to reduce inflammation"
      ],
      prevention: [
        "Anti-inflammatory diet rich in omega-3",
        "Regular exercise to improve circulation",
        "Stress reduction techniques",
        "Avoid environmental toxins",
        "Maintain healthy weight"
      ]
    },
    "fibroids": {
      name: "Uterine Fibroids",
      fullName: "Non-cancerous Uterine Growths",
      icon: "🔴",
      description: "Benign tumors that develop in or around the uterus, potentially causing various symptoms depending on size and location.",
      symptoms: [
        "Heavy or prolonged menstrual bleeding",
        "Pelvic pressure or pain",
        "Frequent urination",
        "Difficulty emptying bladder",
        "Constipation",
        "Backache or leg pains"
      ],
      ayurvedicView: "Known as 'Garbhashaya Arbuda' in Ayurveda, fibroids are considered Kapha-predominant growths resulting from poor digestion, toxin accumulation, and hormonal imbalances.",
      treatment: [
        "Tumor-reducing herbal formulations",
        "Detoxification to eliminate Ama",
        "Hormone-balancing treatments",
        "Specific Panchakarma therapies",
        "Dietary guidelines to prevent growth"
      ],
      prevention: [
        "Maintain healthy weight",
        "Eat fiber-rich, low-fat diet",
        "Regular exercise routine",
        "Limit red meat and processed foods",
        "Manage stress effectively"
      ]
    },
    "thyroid": {
      name: "Thyroid Disorders",
      fullName: "Thyroid Gland Dysfunction",
      icon: "🦋",
      description: "Conditions affecting the thyroid gland's hormone production, including hyperthyroidism and hypothyroidism.",
      symptoms: [
        "Unexplained weight changes",
        "Fatigue or excessive energy",
        "Hair loss or thinning",
        "Mood changes and irritability",
        "Sleep disturbances",
        "Temperature sensitivity"
      ],
      ayurvedicView: "Thyroid disorders relate to 'Galaganda' in Ayurveda, involving imbalanced Kapha and Vata doshas affecting metabolism and energy production in the body.",
      treatment: [
        "Metabolism-regulating herbal medicines",
        "Panchakarma for dosha balancing",
        "Specific yoga practices for thyroid health",
        "Dietary modifications based on condition",
        "Stress management and meditation"
      ],
      prevention: [
        "Iodine-balanced diet",
        "Regular exercise and yoga",
        "Stress management practices",
        "Avoid excessive soy products",
        "Regular thyroid function monitoring"
      ]
    },
    "white-discharge": {
      name: "White Discharge",
      fullName: "Vaginal Discharge and Infections",
      icon: "💧",
      description: "Abnormal vaginal discharge that may indicate infections or other gynecological conditions requiring attention.",
      symptoms: [
        "Unusual color, odor, or consistency of discharge",
        "Itching or burning sensation",
        "Pelvic pain or pressure",
        "Pain during urination",
        "Bleeding between periods",
        "Discomfort during intercourse"
      ],
      ayurvedicView: "Called 'Shweta Pradara' in Ayurveda, abnormal white discharge results from Kapha dosha imbalance, poor immunity, and accumulation of toxins in the reproductive system.",
      treatment: [
        "Antimicrobial herbal medicines",
        "Local treatments with medicated oils",
        "Immunity-boosting Rasayana therapy",
        "Detoxification treatments",
        "Dietary modifications for Kapha balance"
      ],
      prevention: [
        "Maintain proper intimate hygiene",
        "Wear breathable cotton undergarments",
        "Avoid douching and harsh soaps",
        "Follow a balanced, immunity-boosting diet",
        "Practice safe intimate practices"
      ]
    }
  };

  const disease = diseaseData[diseaseId];

  if (!disease) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-matri-deep mb-4">Disease not found</h1>
          <Link to="/diseases" className="text-matri-green hover:underline">
            Back to Diseases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-x-hidden"
    >
      <div className="pt-20">
        <div className="mx-auto max-w-7xl space-y-16 px-6 pb-16">
          
          {/* Header */}
          <Section className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">{disease.icon}</div>
              <h1 className="font-display text-4xl lg:text-6xl text-matri-deep bg-gradient-to-r from-matri-deep via-matri-green to-matri-deep bg-clip-text text-transparent mb-4">
                {disease.name}
              </h1>
              <p className="text-xl text-matri-deep/70 mb-4">{disease.fullName}</p>
              <p className="text-lg text-matri-deep/80 max-w-4xl mx-auto leading-relaxed">
                {disease.description}
              </p>
            </motion.div>
          </Section>

          {/* Content Sections */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Symptoms */}
            <Section className="glass backdrop-blur-md rounded-3xl p-8 border border-white/30 bg-gradient-to-br from-rose-100/50 to-pink-100/50">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center" 
                  alt="Symptoms"
                  className="w-16 h-16 rounded-full object-cover border-2 border-rose-200"
                />
                <h2 className="font-display text-3xl text-matri-deep">Common Symptoms</h2>
              </div>
              <div className="space-y-3">
                {disease.symptoms.map((symptom, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 shadow-sm"></div>
                    <p className="text-matri-deep/80">{symptom}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Ayurvedic View */}
            <Section className="glass backdrop-blur-md rounded-3xl p-8 border border-white/30 bg-gradient-to-br from-purple-100/50 to-lavender-100/50">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop&crop=center" 
                  alt="Ayurveda"
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                />
                <h2 className="font-display text-3xl text-matri-deep">Ayurvedic Understanding</h2>
              </div>
              <p className="text-matri-deep/80 leading-relaxed">{disease.ayurvedicView}</p>
            </Section>

          </div>

          {/* Treatment Approach */}
          <Section className="glass backdrop-blur-md rounded-3xl p-8 border border-white/30 bg-gradient-to-br from-emerald-100/50 to-teal-100/50">
            <div className="text-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=150&fit=crop&crop=center" 
                alt="Treatment"
                className="w-24 h-18 rounded-2xl object-cover mx-auto mb-4 border-2 border-emerald-200"
              />
              <h2 className="font-display text-3xl text-matri-deep">Our Treatment Approach</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disease.treatment.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/70 rounded-2xl p-6 text-center border border-rose-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-3 shadow-sm"></div>
                  <p className="text-matri-deep/80 text-sm">{treatment}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Prevention */}
          <Section className="glass backdrop-blur-md rounded-3xl p-8 border border-white/30 bg-gradient-to-br from-amber-100/50 to-yellow-100/50">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=100&fit=crop&crop=center" 
                alt="Prevention"
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-200"
              />
              <h2 className="font-display text-3xl text-matri-deep">Prevention & Lifestyle</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {disease.prevention.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/70 rounded-xl p-4 border border-amber-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 shadow-sm"></div>
                  <p className="text-matri-deep/80">{tip}</p>
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
                Get Personalized Treatment
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
                Our experienced Vaidyas will create a customized treatment plan specifically for your condition.
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
                <Link to="/diseases">
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
                    View All Conditions
                  </Button>
                </Link>
              </div>
            </motion.div>
          </Section>

        </div>
      </div>
    </motion.div>
  );
}