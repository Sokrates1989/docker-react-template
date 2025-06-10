import React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Header, footer, Sidebar, Navigation.
import Header from "../../skeleton/header/Header";
import Footer from "../../skeleton/footer/Footer";
import Sidebar from "../../skeleton/sidebar/Sidebar";
import Navigation from "../../skeleton/navigation/Navigation";
import SubNavigation1 from "../../skeleton/navigation/SubNavigation1";
import SubNavigation2 from "../../skeleton/navigation/SubNavigation2";
import MobileAccordionNav from "../../skeleton/navigation/MobileAccordionNav";
import MobileBottomNav from "../../skeleton/navigation/MobileBottomNav";

// Note component.
import Note from "./Note";

// Style.
import "./note.css";


function Notes() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Header 
        title={t("notes.title")} 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className="app-body">
        <Sidebar 
          currentSelection="notes" 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="page-wrapper">
          {/* Desktop Navigation (hidden on mobile) */}
          <div className="desktop-nav">
            <Navigation currentSelection="notes" />
            <SubNavigation1 currentSelection="notes" />
            <SubNavigation2 currentSelection="notes" />
          </div>

          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <MobileAccordionNav title={t("notes.sub_navigation_1_heading")}>
              <SubNavigation1 mobileMode currentSelection="notes" />
            </MobileAccordionNav>
            <MobileAccordionNav title={t("notes.sub_navigation_2_heading")}>
              <SubNavigation2 mobileMode currentSelection="notes" />
            </MobileAccordionNav>
          </div>
          <MobileBottomNav currentSelection="notes" />

          
          <div className="main-content">
            <h1 className="heading">{t("notes.heading")}</h1>
            <Note title="note title" content="note content" />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Notes;
