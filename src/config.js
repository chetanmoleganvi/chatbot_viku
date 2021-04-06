import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from './learningoptions';
import LinkList from "./linklist";
import Logo from './images/logo.webp';
import ImageLink from './imagelink';
import VideoLink from './videolink';
import ListLink from './listlink';



const config = {

  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],

  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            image: { Logo },
            id: 1,

          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },

        ],
        Heading: [
          {
            text: "java in ",
            url: "https://frontendmasters.com",
            id: 4,
          },
        ],
      },
    },
    {
      widgetName: "html",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction about 'HTML'",
            url:
              "https://www.w3schools.com/html/html_intro.asp",
            id: 1,
          },
          {
            text: "Wikipedia 'HTML' Guide",
            url:
              "https://en.wikipedia.org/wiki/HTML",
            id: 2,
          },
          {
            text: "What does 'HTML' do",
            url: "https://www.quora.com/What-does-HTML-do",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "css",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to 'CSS'",
            url:
              "https://www.w3schools.com/css/css_intro.asp",
            id: 1,
          },
          {
            text: "Wikipedia 'CSS' Guide",
            url:
              "https://en.wikipedia.org/wiki/CSS",
            id: 2,
          },
          {
            text: "What does 'CSS' do?",
            url: "https://www.dummies.com/programming/what-does-css-do/",
            id: 3,
          },
          {
            text: "photo",
            Image: { Logo },
            id: "4",
          },
        ],
      },
    },
    {
      widgetName: "react",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction about 'React'",
            url:
              "https://www.w3schools.com/react/react_intro.asp",
            id: 1,
          },
          {
            text: "Wikipedia 'React' Guide",
            url:
              "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
            id: 2,
          },
          {
            text: "What does 'React' do",
            url: "https://medium.com/leanjs/introduction-to-react-3000e9cbcd26#:~:text=React%20is%20a%20JavaScript%20library,utilise%20it%20with%20other%20libraries.",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "python",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction about 'Python'",
            url:
              "https://www.w3schools.com/python/python_intro.asp",
            id: 1,
          },
          {
            text: "Wikipedia 'Python' Guide",
            url:
              "https://en.wikipedia.org/wiki/Python_(programming_language)",
            id: 2,
          },
          {
            text: "What does 'Python' do",
            url: "https://www.stxnext.com/what-is-python-used-for/#:~:text=Scientific%20computing%2C%20image%20processing%2C%20data,well%20to%20creating%20quick%20prototypes.",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "Introduction to JS",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction about 'Python'",
            image: 'https://getstream.io/random_png/?id=damp-union-4&name=damp',
            id: 1,
          },
          {
            text: "Wikipedia 'Python' Guide",
            url:
              "https://en.wikipedia.org/wiki/Python_(programming_language)",
            id: 2,
          },
          {
            text: "What does 'Python' do",
            url: "https://www.stxnext.com/what-is-python-used-for/#:~:text=Scientific%20computing%2C%20image%20processing%2C%20data,well%20to%20creating%20quick%20prototypes.",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "images",
      widgetFunc: (props) => <ImageLink {...props} />,
      props: {
        options: [

          {

            image: './images/logo.webp',
            id: 2,
          },
          {

            image: './images/chatbot.png',
            id: 3,
          },
          {

            image: './images/logo.png',
            id: 4,
          },

        ],
      },
    },
    {
      widgetName: "videos",
      widgetFunc: (props) => <VideoLink {...props} />,
      props: {
        options: [

          {
            id: 1,
            name: "Aditi Shetty",
            vidsrc: "https://www.youtube.com/embed/u08NF79VT0M",
          },
          {
            id: 2,
            name: "Ankitha" ,
            vidsrc: "https://www.youtube.com/embed/l3d0dPY5lq8",
          },
        ],
      },
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

  ],
  customStyles: {
    botMessageBox: {

      backgroundColor: "blue"
    },
    chatButton: {
      backgroundColor: "black",
    },
  },
}

export default config