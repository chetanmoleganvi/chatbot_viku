import React from "react";
import { Card } from "react-bootstrap";
import "./css/linklist.css";
import { } from 'react-bootstrap'

const ListLink = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <Card
          className="mb-2"
        style={{ width: '14rem', height: "12rem" }}
      >


        <Card.Header>
          <h8 style={{ color: "black" }}>
            {link.text} {link.title}
          </h8>
        </Card.Header>
        <Card.Body style={{ backgroundcolor:"green"}}>
          <a href={link.url}>
            <Card.Img
              src={link.image}
              alt="logo"
              height="100px"
              width="200px"             
            >

            </Card.Img>
          </a>
          <p  style={{ color: "black","textAlign":"center" }}>
        {link.text}
        </p>
        </Card.Body>
       
      </Card>
      <br />
      
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default ListLink;