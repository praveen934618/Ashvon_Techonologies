import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { DivisionsPage } from "./pages/DivisionsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { SchoolsPage } from "./pages/SchoolsPage";
import { ContactPage } from "./pages/ContactPage";

/**
 * Render the shared site layout and routes under the configured base URL.
 * @returns {React.JSX.Element}
 */
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="app-shell">
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/divisions" element={<DivisionsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
