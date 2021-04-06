import React from "react";


import "./css/linklist.css";

const VideoLink = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
                                <div className="col-md-4">
                        <div className="card mb-4">
                          <iframe width="225" 
                                 height="150" 
                                 src={link.vidsrc} 
                                 frameborder="0" 
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen title="PromVid02">
                                      </iframe>
                          
                            <div className="d-flex justify-content-between align-items-center">
                            
                          </div>
                        </div>
                      </div>
                          
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default VideoLink;