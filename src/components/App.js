import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Akhil",
      email: "akhil.in",
    },
    {
      id: "2",
      name: "Raj",
      email: "raj.in",
    },
    {
      id: "3",
      name: "kumar",
      email: "kumar.in",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
