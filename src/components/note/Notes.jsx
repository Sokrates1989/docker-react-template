import React from "react";

// Header, footer, Sidebar, Navigation.
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../sidebar/Sidebar";
import Navigation from "../navigation/Navigation";
import SubNavigation1 from "../navigation/SubNavigation1";
import SubNavigation2 from "../navigation/SubNavigation2";

// Note component.
import Note from "./Note";

// Style.
import "./note.css";


function Notes() {
  return (
    <>
      <Sidebar currentSelection="notes" />

      <div className="main-content">
        <Header title="Template - Notes" />
        <Navigation currentSelection="notes" />
        <SubNavigation1 currentSelection="notes" />
        <SubNavigation2 currentSelection="notes" />

        <h1 className="heading">My Notes</h1>
        <Note title="note title" content="note content" />

        <Footer />
      </div>
    </>
  );
}

export default Notes;
