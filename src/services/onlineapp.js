import React from "react";
import UG from '../images/admission.png';
import Header from '../saree/header';
import { Row, Col } from 'react-bootstrap';
import Footer from '../saree/footer'
import QR from '../images/qr.jpg';


const Onlineapp = () => {
  window.scrollTo(0, 0);


  return (
    <>
      <Header />
      <div className="album py-5 bg-bg-transparent" id="about" style={{ paddingTop: "3rem" }}>
        <div className="container" >
          <h4>Online  Degree Application </h4>
          <div>
            <div>
              <div>
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="white" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  <image href={UG} height="100%" width="100%" /></svg>
                <div className="card-body">
                  <h2 style={{ textAlign: "center" }}> Online  Degree Application</h2>
                </div>
              </div>
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>
      </div>

      <div className="container">
        <Row>
          <Col>
            <h2 id="powerqualitymeter" style={{ textAlign: "center" }}><b> National Scholarship Portal (NSP) </b></h2>
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
              <image href={UG} alt="logo-img" width="100%" hight="100%" /></svg>
          </Col>
          <Col>
            <h5><b>Application Type</b></h5>
            <ul className="ul">
              <li>UG Cource </li>
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
        <hr className="featurette-divider" />
      </div>
      <Footer />






    </>
  )
};
export default Onlineapp;