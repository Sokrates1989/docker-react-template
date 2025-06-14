import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Our main pages.
import Home from "./components/views/Home";
import Contacts from "./components/views/contact-card/Contacts";
import Notes from "./components/views/note/Notes";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
