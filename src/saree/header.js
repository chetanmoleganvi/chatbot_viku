import React, { useState } from 'react';
import Logo from '../images/logo.png';
import '../css/style.css';
import '../css/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image, Container } from 'react-bootstrap';
import UG from '../images/admission.png';
import SCHOLARSHIP from '../images/Scholarships.png';
import ONLINE from '../images/Onlineadmissions.jpg';
import APPLICATION from '../images/application.jpg';
import '../css/carousel.css';
import '../css/Dropdown.css';




const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (

        <Container>
            <Navbar expand="lg" expanded={expanded} fixed="top" variant="dark" style={{ backgroundColor: 'rgb(0, 0, 88)' }} onClick={() => setExpanded(expanded ? false : "expanded")}>
                <Navbar.Brand href="#home"><img src={Logo} alt="logo" width="100" height="60" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link line current" onClick={() => setExpanded(false)}>Home</Link>
                        <div class="menudropdown">
                            <p className="nav-link">Services <i class="fa fa-caret-down"></i>
                            </p>
                            <div class="menudropdown-content" style={{ paddingTop: "0.9rem" }}>

                                <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}  >
                                    <Image src={SCHOLARSHIP} className="imagecenter" Height="100px" width="100px" />
                                    <Link to="/smartmonotor" style={{ color: "white", "text-align": "center" }}> <h4>Scholarship</h4> </Link>
                                    </div>
                                    <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                                        <Image style={{ "align-items": "center" }} src={UG} className="imagecenter" Height="100px" width="100px" />
                                        <Link to='/smartcontrol' style={{ color: "white", "text-align": "center" }}> <h4> Online UG Admission </h4></Link>
                                    </div>
                                    <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                                        <Image style={{ "align-items": "center" }} src={ONLINE} className="imagecenter" Height="100px" width="100px" />

                                        <Link to="/smartresource" style={{ color: "white", "text-align": "center" }}> <h4> Online Application</h4></Link>

                                    </div>
                                    <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                                        <Image style={{ "align-items": "center" }} src={APPLICATION} className="imagecenter" Height="100px" width="100px" />
                                        <Link to="/smartnetworking" style={{ color: "white", "text-align": "center" }}> <h4>Carees Guidence</h4></Link>
                                    </div>
                                </div>
                            </div>
                   
                        <Link to="#about" className="nav-link line current" onClick={() => setExpanded(false)}>About</Link>
                        <Link to="#contact" className="nav-link line " onClick={() => setExpanded(false)}>Contact</Link>
                    </Nav>
                    <Form inline>
                        <span style={{ fontSize: "16px", color: 'white' }}><i className="fa fa-phone"></i>&emsp;<Link to="+91 9880104339" style={{ color: "grey" }}> +91 9880104339 </Link>  </span>&emsp;
                        <i class="fa fa-envelope" style={{ "font-size": "20px", "color": "white" }}></i>&emsp; <Link to="chetan.moleganvi@gmail.com" style={{ color: "grey" }}>chetan.moleganvi@gmail.com</Link>
                        <a href="#Adress" className="nav-link line current"><i className="fa fa-map"></i>&emsp; Reach Us</a>
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        </Container>

    );
}



export default Header;