import React from "react";
import "./css/learningoptions.css";

const LearningOptions = (props) => {
  const options = [
   {
     text:"Video",
     handler:props.actionProvider.handlerVideo,
   },
   {
    text:"mobile",
    handler:props.actionProvider.handlerstaffimage,
  },
    {
      text:"Photo",
      handler: props.actionProvider.handleImage,
      id : 6
    },
    { 
      text: "HTML", 
      handler: props.actionProvider.handleHTML, 
      id: 1
    },
    { 
      text: "CSS",
      handler: props.actionProvider.handleCSS,
      id: 2 
    },
    { 
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptList,
      id:3 
    },
    { 
      text: "React",
      handler: props.actionProvider.handleReact,
      id: 4 
    },
    { 
      text: "Python",
      handler: props.actionProvider.handlePython,
      id: 5 
    },
   
   
   
 ];
  const optionsMarkup = options.map((option) => (
   
   
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
   
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;