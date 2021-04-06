import React, { useState } from 'react';
import Popup from './popup';
import Chatbot from 'react-chatbot-kit'
import './css/app.css';

import ActionProvider from './actionprovider';
import MessageParser from './messageparser';
import config from './config';
import List from './list';

function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <header className="App-header">
      {/* <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} /> */}
      <div className="bottom-right-text" value="Click to Open Popup" onClick={togglePopup}>
        <i class="fa fa-comments" style={{"font-size":"55px"}}></i>
      </div>
    {isOpen && <Popup
      content={<Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} list={List} />}
      handleClose={togglePopup}
    />}
      </header>
    </div>
  );
}
export default App;