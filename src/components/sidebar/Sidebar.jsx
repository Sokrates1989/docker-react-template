import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaChartLine, 
  FaAddressBook, 
  FaStickyNote, 
  FaCar 
} from "react-icons/fa";
import "./sidebar.css";

function Sidebar({ currentSelection }) {
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <aside className="sidebar">
      <div className="sidebar-title">Template</div>
      <nav className="sidebar-nav">
        <Link className={`sidebar-link ${isActive("home")}`} to="/">
          <FaHome className="icon" /> Home
        </Link>
        <Link className={`sidebar-link ${isActive("contacts")}`} to="/contacts">
          <FaAddressBook  className="icon" /> Contacts
        </Link>
        <Link className={`sidebar-link ${isActive("notes")}`} to="/notes">
          <FaStickyNote  className="icon" /> Notes
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
