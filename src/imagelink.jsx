import React from "react";
import {Card} from "react-bootstrap";

import "./css/linklist.css";

const ImageLink = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
     <Card>
      <img
        src={link.image}
        alt="logo"
       height="100px"
       width="200px"
      >
              
      </img>
      </Card>
      <br />
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default ImageLink;