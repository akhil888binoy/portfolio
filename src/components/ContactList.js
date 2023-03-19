import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  console.log(props);
  const renderContactList = props.contacts.map((contacts) => {
    return <ContactCard contact={contacts}></ContactCard>;
  });
  return <div className="ui celled list">{renderContactList}</div>;
}
