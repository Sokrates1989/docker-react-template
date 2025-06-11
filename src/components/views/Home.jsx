import React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Header, footer, Sidebar, Navigation.
import Header from "../skeleton/header/Header";
import Footer from "../skeleton/footer/Footer";
import Sidebar from "../skeleton/sidebar/Sidebar";
import Navigation from "../skeleton/navigation/Navigation";
import MobileBottomNav from "../skeleton/navigation/MobileBottomNav";

// Test component.
import Test from "./test/Test";


function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Header 
        title={t("home.title")} 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className="app-body">
        <Sidebar 
          currentSelection="home" 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="page-wrapper">
          {/* Desktop Navigation (hidden on mobile) */}
          <div className="desktop-nav">
            <Navigation currentSelection="home" />
          </div>
          <MobileBottomNav currentSelection="home" />

          
          <div className="main-content">
            {getLanguageBasedTestComponent()}
            <Test />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

/**
 * Returns a language-specific test component based on the current language.
 *
 * This is a demonstration of how to render entirely different components or pages
 * depending on the active language in a React app.
 *
 * 📌 Use Case:
 * When different languages require different layouts, logic, or designs,
 * switching the entire component can be cleaner than injecting many conditionals.
 *
 * ⚠️ For simple use cases, prefer using `t()` from `react-i18next` to localize text
 * inside shared components instead of switching entire components.
 *
 * @returns {JSX.Element} The appropriate React component for the active language.
 */
function getLanguageBasedTestComponent() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "en";

  const h1Style = {
    textAlign: "center",
    marginTop: "2rem"
  };

  switch (lang) {
    case "de":
      return <><h1 style={h1Style}>Ich bin ein Beispiel für eine sprachbasierte Komponente</h1></>;
    case "en":
    default:
      return <><h1 style={h1Style}>I am an example of a language-based component</h1></>;
  }
}

export default Home;
