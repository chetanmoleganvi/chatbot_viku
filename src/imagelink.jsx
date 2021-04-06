import React from "react";
import {Row,Col} from 'react-bootstrap'

import "./css/linklist.css";

const ImageLink = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
     <Row>
       <Col>
      <img
        src={link.image}
        alt="logo"
       height="100px"
       width="200px"
      >
              
      </img>
      </Col>
      </Row>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default ImageLink;