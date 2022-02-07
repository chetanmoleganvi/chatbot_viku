import React from 'react';
import Fade from 'react-reveal';
import Directors from '../images/shilpa.jpg';
import FounderPic from '../images/chetan.JPG';
import Logo from '../images/logo.jpg';


class About extends React.Component {
  render() {
    return (
      <div className="album py-5 bg-bg-transparent" id="about" style={{ paddingTop: "3rem" }}>
        <Fade left>
          <div className="container" >

            <h1>About us </h1>

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    <image href={Logo} height="100%" width="100%" /></svg>
                  <div className="card-body">
                    <h2>Company</h2>
                    <p className="card-text">
                      About the company.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="#about">
                          <button type="button" className="btn btn-sm btn-outline-secondary" >More</button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#ffffff" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    <image href={FounderPic} height="100%" width="100%" /></svg>
                  <div className="card-body">
                    <h2>CEO</h2>

                    <p className="card-text">

                      Chetan Moleganvi

                    </p>
                    <p> Owner of Vikush Communaction</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="#directors">
                          <button type="button" className="btn btn-sm btn-outline-secondary">More</button></a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    <image href={Directors} height="100%" width="100%" /></svg>
                  <div className="card-body">
                    <h2>Manging Directors</h2>
                    <p className="card-text">
                      Shilpa Moleganvi
                    </p>
                    <p className="card-text">
                      Owner of Vikush Fancy Stores
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary" href="#founder">More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
export default About;
