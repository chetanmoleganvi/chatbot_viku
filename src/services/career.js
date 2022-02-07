import React from "react";
import COMMING from '../images/coming.gif';
import Header from '../saree/header';
import Footer from '../saree/footer'

const Career = () => {
  window.scrollTo(0, 0);


  return (
    <>
      <Header />
      <div className="album py-5 bg-bg-transparent" id="about" style={{ paddingTop: "3rem" }}>
        <div className="container" >
          <h4>Carees Guidence</h4>
          <div>
            <div>
              <div>
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="white" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  <image href={COMMING} height="100%" width="100%" /></svg>
                <div className="card-body">
                  <h2 style={{ textAlign: "center" }}> Carees Guidence</h2>
                </div>
              </div>
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>
      </div>


      <Footer />






    </>
  )
};
export default Career;