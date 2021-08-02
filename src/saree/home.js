import React from 'react';
import Logo from '../images/logo.jpg';
class NavBar extends React.Component {
     closeNav() {
        document.getElementById("navbarCollapse").style.display = "none";   
      }

      openNav() {
        document.getElementById("navbarCollapse").style.display = "block";   
      }

    render() {
      return (
                <header id="top">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="navbar">
                <a className="navbar-brand" href="#w">
                    <img src= { Logo } width="125" height="75"  alt="logo img"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={ this.openNav }>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#about" onClick={ this.closeNav }>About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#service" onClick={ this.closeNav }>Services</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#gallery" onClick={ this.closeNav }>Gallery</a>
                    </li>
                   
                    <li className="nav-item active">
                        <a className="nav-link" href="#contact" onClick={ this.closeNav }>Contact</a>
                    </li>
                    </ul>                    
                </div>
                <div className="form-inline mt-2 mt-md-0 text-white">
                        <i className="fa fa-phone" style={{ "fontSize":"20px"}}></i>&emsp;+91 1232323231&emsp;
                        <i className="fa fa-envelope" style={{ "fontSize":"20px"}}></i>&emsp;sales@gmail.com
                    </div>
                </nav>
            </header>
     );
    }
}
export default NavBar;
