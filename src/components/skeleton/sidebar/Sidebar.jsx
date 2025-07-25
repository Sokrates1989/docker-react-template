import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FaHome, FaAddressBook, FaStickyNote, FaTimes } from "react-icons/fa";
import "./sidebar.css";

function Sidebar({ currentSelection, isOpen, onClose }) {
  const { t } = useTranslation();
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={onClose}>
          <FaTimes />
        </button>
        <nav className="sidebar-nav">
          <Link className={`sidebar-link ${isActive("home")}`} to="/" onClick={onClose}>
            <FaHome className="icon" /> {t("sidebar.home")}
          </Link>
          <Link className={`sidebar-link ${isActive("contacts")}`} to="/contacts" onClick={onClose}>
            <FaAddressBook className="icon" /> {t("sidebar.contacts")}
          </Link>
          <Link className={`sidebar-link ${isActive("notes")}`} to="/notes" onClick={onClose}>
            <FaStickyNote className="icon" /> {t("sidebar.notes")}
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;