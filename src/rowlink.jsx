import React from "react";
import {Row,} from 'react-bootstrap'


import "./css/linklist.css";

const RowLink = (props) => {
  const linkMarkup = props.options.map((link) => (
    <div className="container" style={{ marginTop: "10px" }}>
                <Row className="justify-content-md-center">
                            <>
                                <div className="col-md-4" style={{ paddingBottom: '2rem' }}>
                                    <div className="card shadow-sm">
                                        <img src={link.image} width="100%" height="100%" alt="Work Force Gallery">
                                          </img>

                                    </div>
                                </div>
                            </>
                        )
                    
                </Row>
            </div>
           
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default RowLink;