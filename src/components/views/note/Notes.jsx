import React from "react";
import { useTranslation } from 'react-i18next';

// Header, footer, Sidebar, Navigation.
import Header from "../../skeleton/header/Header";
import Footer from "../../skeleton/footer/Footer";
import Sidebar from "../../skeleton/sidebar/Sidebar";
import Navigation from "../../skeleton/navigation/Navigation";
import SubNavigation1 from "../../skeleton/navigation/SubNavigation1";
import SubNavigation2 from "../../skeleton/navigation/SubNavigation2";

// Note component.
import Note from "./Note";

// Style.
import "./note.css";


function Notes() {
  const { t } = useTranslation();
  return (
    <>
    
      <Header title={t("notes.title")} />
      <div className="app-body">
        <Sidebar currentSelection="notes" />
        <div className="page-wrapper">
          <Navigation currentSelection="notes" />
          <SubNavigation1 currentSelection="notes" />
          <SubNavigation2 currentSelection="notes" />

          
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
