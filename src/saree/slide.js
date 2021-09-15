import React from 'react';
import { Image } from 'react-bootstrap';
import Slide1 from '../images/admission.png';
import Slide2 from '../images/Scholarships.png';
import Slide3 from '../images/Onlineadmissions.jpg';


class MyCarousel extends React.Component {
    render() {
      return (
          <>
        <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{paddingTop: '3rem'}}>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={Slide1} alt="Text" className="d-block w-100"/>
            <div className="container">
              <div className="carousel-caption text-right text-dark">
                <h3>Cotton saree</h3>
                <p><a className="btn btn-lg btn-dark" href="#career" role="button">Be A member</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">

            <Image src={Slide2} alt="Text" className="d-block w-100"/>
            <div className="container">
              <div className="carousel-caption text-center">
                <h3> gg </h3>                
                <p><a className="btn btn-lg btn-primary" href="#services" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Slide3} alt="Text" className="d-block w-100"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <h2>  </h2>
                <p><a className="btn btn-lg btn-primary" href="#gallery" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br/><br/>
      </>
       );
    }
}
export default MyCarousel;
