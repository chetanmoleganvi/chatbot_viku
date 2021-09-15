import React  from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Slide1 from '../images/admission.png';
import Slide2 from '../images/Scholarships.png';
import Slide3 from '../images/Onlineadmissions.jpg';
import Slide4 from '../images/application.jpg';


function TpCarousel() {
    
  
      return (
          <Carousel style={{paddingTop: '8rem'}}>
            <Carousel.Item>
            <Image src={Slide1} alt="Text" height="200px" width="200px" className="d-block w-100"/>
            <h3 className="txt">Online UG 2021-22 Admission Moduel</h3>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={Slide2} alt="Text" height="200px" width="200px" className="d-block w-100"/>
            <h3 className="txt">All type of Schloaship application </h3>        
            </Carousel.Item>
            <Carousel.Item>
            <Image src={Slide3} alt="Text" height="200px" width="200px" className="d-block w-100"/>
            <h3 className="txt">UG 3rd and 5th Semester Admission  </h3>        
            </Carousel.Item>
            <Carousel.Item>
            <Image src={Slide4} alt="Text" height="200px" width="200px" className="d-block w-100"/>
            <h3 className="txt">All type of Online application </h3>        

              </Carousel.Item>
          </Carousel>
       );
    }

export default TpCarousel;