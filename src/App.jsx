import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { AppointmentModal } from "./components/AppointmentModal";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { DiseasesPage } from "./pages/DiseasesPage";
import { DiseaseDetailPage } from "./pages/DiseaseDetailPage";
import { EducationPage } from "./pages/EducationPage";
import { DoctorsPage } from "./pages/DoctorsPage";
import { AppointmentPage } from "./pages/AppointmentPage";

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 3000); // Show modal after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <FloatingButtons />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/diseases" element={<DiseasesPage />} />
              <Route path="/diseases/:diseaseId" element={<DiseaseDetailPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/appointment" element={<AppointmentPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <AppointmentModal 
            isOpen={showWelcomeModal} 
            onClose={() => setShowWelcomeModal(false)}
            isWelcomeModal={true}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
