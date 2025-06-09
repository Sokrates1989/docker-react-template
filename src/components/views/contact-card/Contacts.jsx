import React from "react";
import { useTranslation } from 'react-i18next';

// Header, footer, Sidebar, Navigation.
import Header from "../../skeleton/header/Header";
import Footer from "../../skeleton/footer/Footer";
import Sidebar from "../../skeleton/sidebar/Sidebar";
import Navigation from "../../skeleton/navigation/Navigation";
import SubNavigation1 from "../../skeleton/navigation/SubNavigation1";

// Components.
import ContactCard, { createContactCard, getContactSummary } from "./ContactCard";

// Data.
import contacts from "../../../data/contacts";

// Style.
import "./contact-card.css";


function Contacts() {
  const { t } = useTranslation();
  return (
    <>
    
      <Header title={t("contacts.title")} />
      <div className="app-body">
        <Sidebar currentSelection="contacts" />
        <div className="page-wrapper">
          <Navigation currentSelection="contacts" />
          <SubNavigation1 currentSelection="contacts" />

          
          <div className="main-content">
            <h1 className="heading">{t("contacts.heading")}</h1>
            
            <p className="sub-title">
              {t("contacts.summary_intro", { summary: getContactSummary(contacts, t) })}
              <br/>
              {t("contacts.reflection_question")}
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

          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contacts;
