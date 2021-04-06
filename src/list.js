import React from "react";
import ListLink from "./listlink";
import LearningOptions  from './listlink';


const List = {
     widgets: [
        {
          widgetName: "learningOptions",
          widgetFunc: (props) => <LearningOptions {...props} />,
        },
       {
          widgetName: "mobileimages",
          widgetFunc: (props) => <ListLink {...props} />,
          props: {
            options: [
              {
                image:'./images/mobile1.png',
                 id: 1,
    
              },
              {
                
                image:'./images/mobile2.png',
                id: 2,
              },
              {
                
                image:'./images/mobile3.png',
                id: 3,
              },
    
            ],
            },
        },
    ]
       
}
export default List