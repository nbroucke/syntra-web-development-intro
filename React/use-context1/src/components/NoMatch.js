import React from "react";
import H1 from "./H1";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <H1 tekst="NoMatch" />
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
