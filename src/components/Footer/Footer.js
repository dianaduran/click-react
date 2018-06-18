import React from "react";
import "./footer.css";
import github from "../../image/github.png";
import linkedin from "../../image/linkedin.png";
import stackoverflow from "../../image/stackoverflow.png";
// import { Link } from 'react-router-dom';
// import { Container } from "../../components/Grid";


const Footer = () => (
 <div className="card text-center border-0 footer">
     <div className="card-header">
     <h6>Copyright 2018-- dianaduran17@gmail.com</h6>
     {/* <Link to="https://github.com/dianaduran/"><img className="icon-Footer rounded-circle" alt="github" src={github} /></Link> */}
            <a href="https://github.com/dianaduran/" target="_blank"><img className="icon-Footer rounded-circle" alt="github" src={github} /></a>
            <a href="https://www.linkedin.com/in/diana-duran-389976a9/" target="_blank"><img className="icon-Footer rounded-circle" alt="linkedin" src={linkedin} /></a>
            <a href="https://stackoverflow.com/users/9211683/diana" target="_blank"><img className="icon-Footer rounded-circle" alt="stackflow" src={stackoverflow} /></a>
    
        </div>
   </div>
);

export default Footer;
