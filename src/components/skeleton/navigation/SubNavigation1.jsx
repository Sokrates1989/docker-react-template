import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./navigation.css";

function SubNavigation1({ currentSelection }) {
  const { t } = useTranslation();
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <nav className="sub-nav-1">
          <Link className={`nav-link ${isActive("home")}`} to="/">{t("sidebar.home")}</Link>
          <Link className={`nav-link ${isActive("contacts")}`} to="/contacts">{t("sidebar.contacts")}</Link>
          <Link className={`nav-link ${isActive("notes")}`} to="/notes">{t("sidebar.notes")}</Link>
    </nav>
  );
}

export default SubNavigation1;
