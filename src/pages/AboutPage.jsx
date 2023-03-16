import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>About this Project</h1>
      <p>This is the react app to leave the feedback for the products or services</p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
