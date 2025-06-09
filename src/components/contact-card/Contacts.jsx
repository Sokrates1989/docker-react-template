import React from "react";

// Header, footer, Sidebar, Navigation.
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../sidebar/Sidebar";
import Navigation from "../navigation/Navigation";
import SubNavigation1 from "../navigation/SubNavigation1";

// Components.
import ContactCard, { createContactCard, getContactSummary } from "./ContactCard";

// Data.
import contacts from "../../data/contacts";

// Style.
import "./contact-card.css";


function Contacts() {
  return (
    <>
      <Sidebar currentSelection="contacts" />

      <div className="main-content">
        <Header title="Contacts" />
        <Navigation currentSelection="contacts" />
        <SubNavigation1 currentSelection="contacts" />
        
        
        <h1 className="heading">My Contacts</h1>
      
        <p className="sub-title">
          My Contacts are: {getContactSummary(contacts)}
          <br/>
          What did you achieve in your life?
        </p>
        
        <ContactCard
          name={contacts[0].name}
          img={contacts[0].imgURL}
          tel={contacts[0].phone}
          email={contacts[0].email}
        />

        
        {/* 
            Explanation:
            When calling contacts.map(createContactCard), the map function internally
            calls createContactCard(contact, index) for each element in the contacts array.
            Array.prototype.map passes three arguments to the callback function:

            1. The current element (in this case, a contact object)
            2. The current index
            3. The entire array (not used here, but available)

            This means our createContactCard function will receive both the contact data
            and the index, making it a perfect fit for use in React to render lists like this:
          */}
        {contacts
          .filter(contact => contact.name === "Jack Bauer" || contact.name === "Chuck Norris")
          .map(createContactCard)}

        <Footer />
      </div>
    </>
  );
}

export default Contacts;
