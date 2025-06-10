import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaAddressBook, FaStickyNote, FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./navigation.css"; 

export default function MobileBottomNav(currentSelection) {
  const { t } = useTranslation();
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/" className={`mobile-tab ${isActive("home")}`}>
        <FaHome className="nav-icon" />
        <span className="nav-label">{t("sidebar.home")}</span>
      </NavLink>
      <NavLink to="/contacts" className={`mobile-tab ${isActive("contacts")}`}>
        <FaAddressBook className="nav-icon" />
        <span className="nav-label">{t("sidebar.contacts")}</span>
      </NavLink>
      <NavLink to="/notes" className={`mobile-tab ${isActive("notes")}`}>
        <FaStickyNote className="nav-icon" />
        <span className="nav-label">{t("sidebar.notes")}</span>
      </NavLink>
    </nav>
  );
}