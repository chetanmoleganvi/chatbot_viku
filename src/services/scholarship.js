import React from "react";
import Fade from 'react-reveal';
import { Row, Col, Image } from 'react-bootstrap';
import Jindal from '../images/jindal.png';
import NSP from '../images/nsp.jpg';
import SSP from '../images/ssp.PNG';
import Help from '../images/help.jpg';
import QR from '../images/qr.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../saree/header';
import Footer from '../saree/footer'

const Scholarship = () => {
    window.scrollTo(0, 0);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    

    return (
        <>
            <Header />
            <Fade right>
                <div className="container" style={{ marginTop: "40px" }}>
                    <Row>
                        <Col>
                            <Link to="#nsp">
                                <Image className="bd-placeholder-img card-img-top" src={NSP} height="130" width="130" rounded title="Power Quality Meter" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> National Scholarship Portal (NSP)</p> </Link>
                        </Col>
                        <Col>
                            <Link to="#ssp" >
                                <Image className="bd-placeholder-img card-img-top" src={SSP} height="130" width="130" rounded title="ssp" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> State Scholarship Portal (SSP)  </p></Link>
                        </Col>
                        <Col>
                            <Link to="#jindal">
                                <Image className="bd-placeholder-img card-img-top" src={Jindal} height="130" width="130" rounded title="jindal" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> Jindal  </p></Link>
                        </Col>
                        <Col>
                            <Link to="#help" >
                                <Image className="bd-placeholder-img card-img-top" src={Help} height="130" width="130" rounded title="helpler" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> Help a child </p></Link>
                        </Col>

                    </Row>
                    <div id="nsp">

                    </div>
                    <hr className="featurette-divider" />
                </div>

            </Fade>
            <div className="bottom-right-text" value="Click to Open scrolltop " onClick={scrollToTop} >
        <i class="fa fa-arrow-up" style={{"font-size":"55px"}}></i>
      </div>
            <div className="container">
                
                <Fade left>
                    <Row>
                        <Col>
                            <h2 style={{ textAlign: "center" }}><b> National Scholarship Portal (NSP) </b></h2>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={NSP} alt="logo-img" width="100%" hight="100%" /></svg>
                        </Col>
                        <Col>
                            <h5><b>Application Type</b></h5>
                            <ul className="ul">
                                <li>Fresh Application </li>
                                <li>Renual of Application</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">

                                <li>SSLC Marks Card </li>
                                <li> PUC Marks Crad</li>
                                <li> Adhar Card </li>
                                <li> Bank Passbook </li>
                                <li> Income & Cast Certificate </li>
                                <li> Passport Size Photo </li>
                                <li> Parents Bank Passbook </li>
                                <li> Parent Adhar card </li>
                            </ul>
                        </Col>
                        <Col className="column">
                            <h4 style={{ textAlign: "center" }}><b> Scan the QR Code after recving the Application and Pay Rs 100  </b></h4>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image style={{ "align-items": "center" }} href={QR} alt="logo-img" width="100%" height="100%" /></svg>
                        </Col>

                    </Row>
                    <div id="ssp">

                    </div>
                </Fade>
            </div>

            <div className="container">
                <Fade left>
                    <hr className="featurette-divider" />

                    <Row>
                        <Col className="column">
                            <h4 style={{ textAlign: "center" }}><b> Scan the QR Code after recving the Application and Pay Rs 100  </b></h4>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image style={{ "align-items": "center" }} href={QR} alt="logo-img" width="100%" height="100%" /></svg>

                        </Col>

                        <Col>
                            <h5><b>Application Type</b></h5>
                            <ul className="ul">
                                <li>Fresh Application </li>
                                <li>Renual of Application</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">

                                <li>SSLC Marks Card </li>
                                <li> PUC Marks Crad</li>
                                <li> Adhar Card </li>
                                <li> Bank Passbook </li>
                                <li> Income & Cast Certificate </li>
                                <li> Passport Size Photo </li>
                                <li> Parents Bank Passbook </li>
                                <li> Parent Adhar card </li>
                            </ul>
                        </Col>
                        <Col>
                            <h2 style={{ textAlign: "center" }}> State Scholarship Portal (SSP)</h2>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={SSP} alt="logo-img" width="100%" hight="100%" /></svg>
                        </Col>


                    </Row>
                    <div id="jindal">

                    </div>
                </Fade>
            </div>

            <div className="container">
                <Fade right>
                    <hr className="featurette-divider" />

                    <Row>
                        <Col>
                            <h2 style={{ textAlign: "center" }}> Jindal </h2>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={Jindal} alt="logo-img" width="100%" hight="100%" /> </svg>
                        </Col>
                        <Col>
                            <h5><b>Application Type</b></h5>
                            <ul className="ul">
                                <li>Fresh Application </li>
                                <li>Renual of Application</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">

                                <li>SSLC Marks Card </li>
                                <li> PUC Marks Crad</li>
                                <li> Adhar Card </li>
                                <li> Bank Passbook </li>
                                <li> Income & Cast Certificate </li>
                                <li> Passport Size Photo </li>
                                <li> Parents Bank Passbook </li>
                                <li> Parent Adhar card </li>
                            </ul>
                        </Col>
                        <Col className="column">
                            <h4 style={{ textAlign: "center" }}><b> Scan the QR Code after recving the Application and Pay Rs 100  </b></h4>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image style={{ "align-items": "center" }} href={QR} alt="logo-img" width="100%" height="100%" /></svg>
                        </Col>

                    </Row>
                    <div id="help" >

                    </div>
                </Fade>
            </div>
            <div className="container">
                <Fade right>
                    <hr className="featurette-divider" />

                    <Row>
                        <Col className="column">
                            <h4 style={{ textAlign: "center" }}><b> Scan the QR Code after recving the Application and Pay Rs 100  </b></h4>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image style={{ "align-items": "center" }} href={QR} alt="logo-img" width="100%" height="100%" /></svg>
                        </Col>
                        <Col>
                            <h5><b>Application Type</b></h5>
                            <ul className="ul">
                                <li>Fresh Application </li>
                                <li>Renual of Application</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">

                                <li>SSLC Marks Card </li>
                                <li> PUC Marks Crad</li>
                                <li> Adhar Card </li>
                                <li> Bank Passbook </li>
                                <li> Income & Cast Certificate </li>
                                <li> Passport Size Photo </li>
                                <li> Parents Bank Passbook </li>
                                <li> Parent Adhar card </li>
                            </ul>
                        </Col>

                        <Col>
                            <h2 style={{ textAlign: "center" }}> Help A Child</h2>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={Help} alt="logo-img" width="100%" hight="100%" /></svg>
                        </Col>
                    </Row>
                </Fade>
            </div>

            <div className="container">

                <hr className="featurette-divider" />

            </div>
            <Footer />
        </>
    )
};
export default Scholarship;