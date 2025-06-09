import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FaHome, FaAddressBook, FaStickyNote, FaFlask } from "react-icons/fa";
import "./sidebar.css";

function Sidebar({ currentSelection }) {
  const { t } = useTranslation();
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link className={`sidebar-link ${isActive("home")}`} to="/">
          <FaHome className="icon" /> {t("sidebar.home")}
        </Link>
        <Link className={`sidebar-link ${isActive("contacts")}`} to="/contacts">
          <FaAddressBook className="icon" /> {t("sidebar.contacts")}
        </Link>
        <Link className={`sidebar-link ${isActive("notes")}`} to="/notes">
          <FaStickyNote className="icon" /> {t("sidebar.notes")}
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
