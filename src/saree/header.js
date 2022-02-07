import React, { useState } from 'react';
import Logo from '../images/logo.jpg';
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
                <Link to="/"><img src={Logo} alt="logo" width="100" height="60" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link line current" onClick={() => setExpanded(false)}>Home</Link>
                        <Link to="#about" className="nav-link line current" onClick={() => setExpanded(false)}>About</Link>

                        <div class="menudropdown">
                            <Link to="#services" className="nav-link line current" onClick={() => setExpanded(false)}>Services</Link>
                            <div class="menudropdown-content" style={{ paddingTop: "0.9rem" }}>

                                <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}  >
                                    <Image src={SCHOLARSHIP} className="imagecenter" Height="100px" width="100px" />
                                    <Link to="/scholarship" style={{ color: "white", "text-align": "center" }}> <h4>Scholarship</h4> </Link>
                                </div>
                                <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                                    <Image style={{ "align-items": "center" }} src={UG} className="imagecenter" Height="100px" width="100px" />
                                    <Link to='/onlineapp' style={{ color: "white", "text-align": "center" }}> <h4> Online UG Admission </h4></Link>
                                </div>
                                <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                                    <Image style={{ "align-items": "center" }} src={ONLINE} className="imagecenter" Height="100px" width="100px" />

                                    <Link to="/Online" style={{ color: "white", "text-align": "center" }}> <h4> Online Application</h4></Link>

                                </div>
                                <div class="menucolumn text-menu" style={{ paddingTop: "2rem" }}>
                                    <Image style={{ "align-items": "center" }} src={APPLICATION} className="imagecenter" Height="100px" width="100px" />
                                    <Link to="/Career" style={{ color: "white", "text-align": "center" }}> <h4>Carees Guidence</h4></Link>
                                </div>
                            </div>
                        </div>

                        <Link to="#contact" className="nav-link line " onClick={() => setExpanded(false)}>Contact</Link>
                        <Link to="#form" className="nav-link line " onClick={() => setExpanded(false)}>Registration </Link>

                    </Nav>
                    <Form inline>
                        <span style={{ fontSize: "16px", color: 'white' }}><i className="fa fa-phone"></i>&emsp;<Link to="+91 9880104339" style={{ color: "grey" }}> +91 9880104339 </Link>  </span>&emsp;
                        <i class="fa fa-envelope" style={{ "font-size": "20px", "color": "white" }}></i>&emsp; <Link to="chetan.moleganvi@gmail.com" style={{ color: "grey" }}>chetan.moleganvi@gmail.com</Link>
                        <a href="https://www.google.com/maps/place/G+S+MOLEGANVI+saree's/@16.4824476,75.1237087,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc730c680cb13d3:0x6ec9042db5c3bb40!8m2!3d16.4824476!4d75.1258974" className="nav-link line current"><i className="fa fa-map"></i>&emsp; Reach Us</a>
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        </Container>

    );
}



export default Header;