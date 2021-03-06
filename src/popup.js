import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="bottom-right">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;