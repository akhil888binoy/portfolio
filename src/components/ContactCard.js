import React from "react";
import Mailrobo from "../images/Mailrobo.png";

function ContactCard(props) {
  const { id, name, email } = props.contacts ?? {};

  if (!name || !email) {
    // handling case when name or email is empty or undefined
    return <div>No name or email found!</div>;
  }

  return (
    <div className="item">
      <img src={Mailrobo} alt="Mailrobo" className="ui avatar image " />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
}

export default ContactCard;
