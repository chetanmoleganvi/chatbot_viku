import React from "react";
import Fade from 'react-reveal';
import { Row, Col, Image } from 'react-bootstrap';
import Pan from '../images/pan.jpg';
import PVC from '../images/pvc.jpg';
import INCOME from '../images/income.png';
import QR from '../images/qr.jpg';
import RATION from '../images/ration.jpg';
import Passport from '../images/pass.jpg';
import BUSPASS from '../images/bus.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../saree/header';
import Footer from '../saree/footer'

const Online = () => {
    window.scrollTo(0, 0);


    return (
        <>
            <Header />
            <div className="container" style={{ marginTop: "40px" }}>
                <Fade right>
                    <Row>
                        <Col>
                            <Link to="#Pan">
                                <Image className="bd-placeholder-img card-img-top" src={Pan} height="130" width="130" rounded title="Power Quality Meter" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> Permanent Account Number (PAN)</p> </Link>
                        </Col>
                        <Col>
                            <Link to="#PVC" >
                                <Image className="bd-placeholder-img card-img-top" src={PVC} height="130" width="130" rounded title="ssp" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> PVC AADHAR CARD (PVC)  </p></Link>
                        </Col>
                        <Col>
                            <Link to="#RATION">
                                <Image className="bd-placeholder-img card-img-top" src={RATION} height="130" width="130" rounded title="jindal" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> RATION CRAD (RC) </p></Link>
                        </Col>
                        <Col>
                            <Link to="#INCOME" >
                                <Image className="bd-placeholder-img card-img-top" src={INCOME} height="130" width="130" rounded title="helpler" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> INCOME & CAST </p></Link>
                        </Col>
                        <Col>
                            <Link to="#Passport" >
                                <Image className="bd-placeholder-img card-img-top" src={Passport} height="130" width="130" rounded title="helpler" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> PASS-PORT SEVA </p></Link>
                        </Col>
                        <Col>
                            <Link to="#BUSPASS" >
                                <Image className="bd-placeholder-img card-img-top" src={BUSPASS} height="130" width="130" rounded title="helpler" />
                                <p style={{ color: "black", paddingTop: "1rem", textAlign: "center" }}> STUDENT BUS-PAS </p></Link>
                        </Col>



                    </Row>
                </Fade>
                <div id="Pan">

                </div>
                <hr className="featurette-divider" />
            </div>

            <div className="container">
                <Fade left>
                    <Row>
                        <Col>
                            <h2 style={{ textAlign: "center" }}><b> Permanent Account Number (PAN) </b></h2>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={Pan} alt="logo-img" width="100%" hight="100%" /></svg>
                        </Col>
                        <Col>
                            <h5><b>Application Type</b></h5>
                            <ul className="ul">
                                <li>New Application</li>
                                <li>Correction of Application</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">

                                <li>SSLC Marks Card </li>
                                <li> Adhar Card </li>
                                <li> Bank Passbook </li>
                                <li> Income & Cast Certificate </li>
                                <li> Passport Size Photo </li>
                                <li> Leving Certificate</li>
                            </ul>
                        </Col>
                        <Col className="column">
                            <h4 style={{ textAlign: "center" }}><b> Scan the QR Code after recving the Application and Pay Rs 100  </b></h4>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image style={{ "align-items": "center" }} href={QR} alt="logo-img" width="100%" height="100%" /></svg>
                        </Col>

                    </Row>
                </Fade>
                <div id="PVC">

                </div>

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
                                <li>PVC Card Application</li>
                                <li>Downlod and print of Aadhar</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">

                                <li> Adhar Card </li>
                                <li> Passport Size Photo </li>
                                <li> Mobile No linked to Adhar </li>
                            </ul>
                        </Col>
                        <Col>
                            <h2 style={{ textAlign: "center" }}> PVC </h2>
                            <p style={{ textAlign: "center" }}>PVC AADHAR CARD (PVC)</p>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={PVC} alt="logo-img" width="100%" hight="100%" /></svg>
                        </Col>


                    </Row>
                </Fade>
                <div id="RATION">

                </div>
            </div>

            <div className="container">
                <Fade left>
                    <hr className="featurette-divider" />

                    <Row>
                        <Col>
                            <h2 style={{ textAlign: "center" }}> RATION CARD</h2>
                            <h4 style={{ textAlign: "center" }}> RC</h4>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={RATION} alt="logo-img" width="100%" hight="100%" /> </svg>
                        </Col>
                        <Col>
                            <h5><b>Application Type</b></h5>
                            <ul className="ul">
                                <li>New Application </li>
                                <li>Updating  of Application</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">
                                <li> Ration Card For Adding Members</li>
                                <li> Adhar Card </li>
                                <li> Income & Cast Certificate </li>
                                <li> Passport Size Photo </li>
                                <li> Mobile Linked With Adhar</li>
                                <li> Add Member  Adhar card </li>
                            </ul>
                        </Col>
                        <Col className="column">
                            <h4 style={{ textAlign: "center" }}><b> Scan the QR Code after recving the Application and Pay Rs 100  </b></h4>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image style={{ "align-items": "center" }} href={QR} alt="logo-img" width="100%" height="100%" /></svg>
                        </Col>

                    </Row>
                </Fade>
                <div id="INCOME" >

                </div>
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
                                <li>New Application </li>
                                <li>Renual of Application</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">

                                <li>SSLC Marks Card </li>
                                <li> Leving Certifacte (LC) </li>
                                <li> Adhar Card </li>
                                <li> Bank Passbook </li>
                                <li> Income & Cast Certificate </li>
                            </ul>
                        </Col>

                        <Col>
                            <h2 style={{ textAlign: "center" }}> CAST & INCOME</h2>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={INCOME} alt="logo-img" width="100%" hight="100%" /></svg>
                        </Col>
                    </Row>
                </Fade>
                <div id="Passport">

                </div>
            </div>
            <div className="container">
                <hr className="featurette-divider" />
                <Fade left>
                    <Row>
                        <Col>
                            <h2 style={{ textAlign: "center" }}><b> PASSPORT SEVA </b></h2>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={Passport} alt="logo-img" width="100%" hight="100%" /></svg>
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
                                <li> Leving Certifacte (LC) </li>
                                <li> Adhar Card </li>
                                <li> Bank Passbook </li>
                                <li> PAN card</li>
                                <li> Income & Cast Certificate </li>
                                <li> Passport Size Photo </li>
                            </ul>
                        </Col>
                        <Col className="column">
                            <h4 style={{ textAlign: "center" }}><b> Scan the QR Code after recving the Application and Pay Rs 100  </b></h4>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image style={{ "align-items": "center" }} href={QR} alt="logo-img" width="100%" height="100%" /></svg>
                        </Col>

                    </Row>
                </Fade>
                <div id="BUSPASS">

                </div>
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
                                <li>SChool Bus-Pass Application </li>
                                <li> College Student Application</li>
                            </ul>
                            <h5><b>Document Required</b></h5>
                            <ul className="ul">

                                <li>SSLC Marks Card </li>
                                <li> Adhar Card </li>
                                <li> Mobile No linked with Adhar    </li>
                                <li> Bank Passbook </li>
                                <li> Income & Cast Certificate </li>
                                <li> Passport Size Photo </li>
                                <li> Parent Adhar card </li>
                            </ul>
                        </Col>
                        <Col>
                            <h2 style={{ textAlign: "center" }}> STUDENT BUS PASS </h2>
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={BUSPASS} alt="logo-img" width="100%" hight="100%" /></svg>
                        </Col>


                    </Row>
                </Fade>

            </div>

            <Footer />
        </>
    )
};
export default Online;