import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InitiativesPage from "./pages/InitiativesPage";
import InitiativeDetailPage from "./pages/InitiativeDetailPage";
import DonatePage from "./pages/DonatePage";
import PalestinePage from "./pages/PalestinePage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import EquipmentPage from "./pages/EquipmentPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/initiatives" element={<InitiativesPage />} />
          <Route path="/initiatives/:id" element={<InitiativeDetailPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/palestine" element={<PalestinePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
