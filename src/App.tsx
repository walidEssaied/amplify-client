import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./appComponents/Footer";
import { Navbar } from "./appComponents/Navbar";
import { CallToAction } from "./appComponents/ScrollToTop";

import { Blog } from "./appComponents/Blog";
import { Contact } from "./appComponents/Contact";

import "./App.css";
import { AboutPage } from "./appComponents/AboutPage";
import { Home } from "./appComponents/Home";
import { ServicePage } from "./appComponents/ServicePage";
import TermsAndConditions from "./appComponents/TermsAndConditions";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </main>
      <Footer />
      <CallToAction />
    </Router>
  );
}

export default App;
