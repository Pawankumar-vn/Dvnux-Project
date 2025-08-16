import { Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/hero-section";
import LinuxIntroSection from "../src/components/Linux-intro-section";
import ComparisonTool from "../src/components/Comparison-tool";
import Footer from "../src/components/Footer";
import CardsSection from "./components/CardsSection";

import About from "./pages/About";
import Distro from "./pages/Distro";
import Quiz from "./pages/Quiz";
import LearnPage from "./pages/Learn";
import NotFoundPage from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <LinuxIntroSection />
              <CardsSection />
              <div id="quiz">{/* Quiz section placeholder */}</div>
              <div id="compare">
                <ComparisonTool />
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/distro" element={<Distro />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
