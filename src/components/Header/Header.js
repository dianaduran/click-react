import React from "react";
import "./header.css";

import { Container } from "../../components/Grid";

const Header = () => (
    <div className="header">
    <Container fluid>
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </Container>
    </div>
  );
  
  export default Header;