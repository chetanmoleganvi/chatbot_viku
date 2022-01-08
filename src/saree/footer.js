import React, { Component } from 'react';
import Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import {Row ,Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    const footerbgColor = {
      backgroundColor : "black",
      marginTop : "30px"
    };

    const footerTextSize = {
      fontSize: "36px"
    };

    return (
      <div className="fluid" id="contact">
         
        <footer className="card-body footer-text" style={footerbgColor}>
                <div className="row">
                    <div className="col-sm-4">
                      {/* <svg className="bd-placeholder-img" width="100px" height="30px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"> */}
                        <img src={Logo} alt="Tool-img" width="50%" height="50%"/>
                        <title>Placeholder</title>
                      {/* </svg> */}
                      <p className="card-text" style={{color:"white"}}> “Vikush online servies and Vikush Stationary has ben started for all 
                      kind of people who need not come to home to get the servies just sit in home and a call or msg will make it out. 
                      support us " </p>
                    </div>
                    <div className="col-sm-4" >
                      <h4 className="card-title" style={{paddingLeft : '60px'}}><b>Quick Links</b></h4>
                      <Row>
                        <Col>
                          <p className="card-text" style={{color:"white"}}>
                              <ul>
                                  <li style={{color:"white"}}><Link className="nav-link" to="#about" style={{color:"white"}} >Home</Link></li>
                                  <li style={{color:"white"}}><Link className="nav-link" to="services" style={{color:"white"}}>Service</Link></li>
                                  <li style={{color:"white"}}><Link className="nav-link" to="/smartresource" style={{color:"white"}}>Products</Link></li>
                                 
                              </ul>
                          </p>
                          </Col>
                      </Row>
                    </div>
                    <div className="col-sm-4">
                        <h4><b>Contact</b></h4>
                        <p className="card-text" style={{color:"white"}}>Vikush Online Service & Sationary<br/>
                                    Moleganvi Lane, Near Sadashiv temple 
                                  Rabakavi-Banahtti  Taluk,
                                      Banahatti-587311, India <br/>
                                      <span style={{ fontSize: "16px", color: 'white' }}><i className="fa fa-phone"></i>&emsp;<Link to="+91 9880104339" style={{ color: "grey" }}> +91 9880104339 </Link>  </span>&emsp;
                                      <br/> <i class="fa fa-envelope" style={{ "font-size": "20px", "color": "white" }}></i>&emsp; <Link to="chetan.moleganvi@gmail.com" style={{ color: "grey" }}>chetan.moleganvi@gmail.com</Link>

                                                                                              
                                                    </p>
                         <p>
                            <a href="https://facebook.com/"><i className="fa fa-facebook-square link-color" style={footerTextSize}></i></a>&emsp;
                            <a href="https://linkedin.com/"><i className="fa fa-linkedin link-color" style={footerTextSize}></i></a>&emsp;
                            <a href="https://twitter.com"><i className="fa fa-twitter link-color" style={footerTextSize}></i></a>&emsp;
                        </p>
                    </div>
              </div>
                <p>&copy; Vikush Online Service & Sationary &middot; <a className="link-color" href="/privacy">Privacy</a> &middot; <a className="link-color" href="/terms">Terms</a></p>
                <p className="float-right">made by <a className="link-color" href="www.anyonecancode.in">Chetan Moleganvi</a></p>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </footer>
      </div>
    );
  }
}

export default Footer;