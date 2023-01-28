import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Offcanvas from "./Offcanvas";

export default function Home({ products }) {
  return (
    <div>
      <Offcanvas></Offcanvas>
      <h1>Home</h1>
    </div>
  );
}
