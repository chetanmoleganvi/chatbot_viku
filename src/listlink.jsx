import React from "react";

import "./css/linklist.css";
import {Row,Col} from 'react-bootstrap'

const ListLink = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
       <Row>
       <Col>
       <h6 style={{color:"Black"}}> 
         {link.title}
       </h6>
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

export default ListLink;