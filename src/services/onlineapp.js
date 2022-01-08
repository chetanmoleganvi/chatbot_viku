import React from "react";
// import NavBar from './navbar';
// import Contactus from './contactus';
import { Row, Col, Image } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import UG from '../images/admission.png';
import SCHOLARSHIP from '../images/Scholarships.png';
import ONLINE from '../images/Onlineadmissions.jpg';
import APPLICATION from '../images/application.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../saree/header';
// import SubNav from '../subnav';

// import SubNav from '../subnav';



function Onlineapp() {
   return (
      <>
            <Header />
                    <div className="container" style={{ marginTop: "40px"}}>
                        {/* <MultiCarousel items = { categoryhr } />             */}
                        <Row>
                            <Col>
                                <Link to="#powerqualitymeter"> 
                                <Image src={SCHOLARSHIP} height="130" width="130" rounded title="Power Quality Meter" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Power Quality Meter</p> </Link>
                            </Col>
                            <Col>
                                <Link to="#apfc" > 
                                <Image src={UG} height="130" width="130" rounded title="APFC" />
                                <p style={{color:"black", paddingTop:"1rem"}}> APFC </p></Link>
                            </Col>
                            <Col>
                                <Link to="#demandcontrol">  
                                <Image src={ONLINE} height="130" width="130" rounded  title="DemandControl" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Demand Control  </p></Link>
                            </Col>
                            <Col>
                                <Link to="#powerfactorcontrol" >  
                                <Image src={APPLICATION} height="130" width="130" rounded title="PowerFactorController" />
                                <p style={{color:"black", paddingTop:"1rem"}}> Power Factor Controller </p></Link>
                            </Col>
                        </Row>
                 
                        <hr className="featurette-divider" />
                    </div>

                   

                    <div className="container">
                        <Row>
                            <Col>
                                <h2 id="powerqualitymeter" style={{ textAlign: "center" }}><b> Power Quality Meter </b></h2>
                                <p style={{ textAlign: "center" }}> Measure, record and visualize electrical network parameters </p> 
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={SCHOLARSHIP} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>Power quality meter displays waveform for instantaneous V,I, harmonics,Sag/Swell with data storage upto 14GB</li>
                                 <li>Measurement of THD and harmonics up to 63 rd order is possible with power quality meter</li>
                                 <li>Captures and measures power quality events: flicker, K factor, crest factor,sag/swell, interruption & unbalance</li>
                                 <li>TOD option for energy & demand upto 8 slots</li>
                                 <li> Power quality meter monitors performance & availability of devices using inbuilt MQTT & TCP/IP protocol</li>
                                 <li>Power quality meter is an ideal choice for remote monitoring of devices via M2M software platform</li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">

                                 <li>Monitoring critical load,incomers, and HT panels </li>
                                 <li> Utility billing in Apartments and commercial complexes</li>
                                 <li> Measuring energy variants in Building Management system</li>
                                 <li>  Measuring power & energy variants in Gensets, Test benches, and the laboratories</li>

                                </ul>
                            </Col>
                        </Row>
                    </div>

                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li> Power factor controlling based on the capacitor bank switching history</li>
                     <li>Capacitor is automatically disabled when it is deteriorated beyond a certain level</li>
                     <li> Automatically learns the number of capacitors connected and the value.</li>
                     <li>Capacitance-based power factor correction takes care of variation in voltage and frequency.</li>
                     <li>  Controlling based on VAR parameter and availability of built-in alarms</li>
                     <li>  Flexibility for site programmability of CT ratio suitable for any load</li>


                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li>Automobile industry</li>
                                 <li> Cement Industry</li>
                                 <li>  Hospitals, commercial industries</li>
                                 <li> Any manufacturing industry</li>

                                </ul>
                            </Col>

                            <Col>
                                <h2 id="apfc" style={{ textAlign: "center" }}> Digital Panel Meter</h2>
                                <p style={{ textAlign: "center" }}>Basic parameters measured precisely</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={UG} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                        </Row>
                    </div>

                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h2 id="demandcontrol" style={{ textAlign: "center" }}> Demand Controller </h2>
                                <p style={{ textAlign: "center" }}>High-end multifunction meter for comprehensive energy management</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={ONLINE} alt="logo-img" width="100%" hight="100%"/> </svg>
                            </Col>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>1 sec. update for demand makes the demand controlling very precise</li>
                     <li>Field programmable demand parameters kVA, kW, kVAR and Aavg</li>
                     <li>TOU/TOD based controlling. Individually programmable demand level</li>
                     <li>Maximum demand controller can forecast demand and cuts off load as maximum demand crosses preset value</li>
                     <li>  Communication: MODBUS RTU, RS485, BACnet </li>

                                    
                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                    <li>Automatic connection or disconnection of Gensets connected to common bus. </li>
                                    <li>Process management</li>
                                    <li>  Maximum demand control & management</li>
                                    <li> Energy Accounting & Balancing</li>

                                </ul>

                            </Col>
                        </Row>
                    </div>
                    <div className="container">

                        <hr className="featurette-divider" />

                        <Row>
                            <Col>
                                <h5><b>Salient Features</b></h5>
                                <ul className="ul">
                                <li>User programmable</li>
                                 <li> Three phase sensing (it gives accurate measurement of PF</li>
                                 <li>Automatic or manual control (manual control with power backup option </li>
                                 <li>Four quadrant operation</li>
                                 <li> Optional RS485 communication interface </li>

                                </ul>
                                <h5><b>Applications</b></h5>
                                <ul className="ul">
                                <li>can work for any electrical Incomer</li>
                                 <li> Fixed power factor corrections individual (e.g. motor, transformers, lighting, etc.)</li>
                                 <li> Group fixed power factor correction (several equipments connected in a group)</li>
                                 <li>  Capacitor banks of tuned and detuned</li>

                                </ul>

                            </Col>
                            <Col>
                                <h2 id="powerfactorcontrol" style={{ textAlign: "center" }}> Power Factor Controller </h2>
                                <p style={{ textAlign: "center" }}>Intelligent device to maintain the power factor in required range</p>
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                                <image href={APPLICATION} alt="logo-img" width="100%" hight="100%"/></svg>
                            </Col>
                        </Row>
                    </div>
                    <div className="container">

                        <hr className="featurette-divider" />

                    </div>
        </>
   )
};
export default Onlineapp;