import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Offcanvas from "./Offcanvas";

function Contact({ products }) {
  return (
    <div>
      <Offcanvas></Offcanvas>
      <h1>Contacts</h1>
    </div>
  );
}

export default Contact;
