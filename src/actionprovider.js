import Logo from './images/logo.webp';
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greetig() {
      
      const greetingMessage = this.createChatBotMessage("Hello, what can i do for u.")
      this.updateChatbotState(greetingMessage)
    }
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }
    greet2() {
      const greetingMessage = this.createChatBotMessage("I am 'ChatBot'.")
      this.updateChatbotState(greetingMessage)
    }
    image(){
      const getImageStreamFromMessage = this.image = {Logo}
      this.updateChatbotState(getImageStreamFromMessage)
    }
    

  handleHTML = () => {
    const message2 = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on HTML :",
      {
          widget: "html"
      }
    );

  this.updateChatbotState(message2);
};


  handleCSS = () => {
    const message3 = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on CSS :",
      {
          widget: "css"
      }
    );

  this.updateChatbotState(message3);
  };

  handleJavascriptList = () => {
    const message4 = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on JavaScript :",
      {
          widget: "javascriptLinks"
      }
    );

  this.updateChatbotState(message4);
  };

  handleReact = () => {
    const message4 = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on React :",
      {
          widget: "react"
      }
    );

  this.updateChatbotState(message4);
  };

  handlePython = () => {
    const message5 = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Python :",
      {
          widget: "python"
      }
    );
    this.updateChatbotState(message5);
  };
  handleImage = () => {
  const imagemessage = this.createChatBotMessage (
    "images to display",
    {
      widget: "images"
    }
  );
  this.updateChatbotState(imagemessage)
  }


  handlerVideo = () => {
    const videomessage = this.createChatBotMessage (
      "Here are some Videos",
      {
        widget: "videos"
      }
    );
    this.updateChatbotState(videomessage)
    }

    handlermobile = () => {
      const mobile = this.createChatBotMessage(
      "mobile hand sets", 
      {
        widget:"mobileimages"
      }
      );
      this.updateChatbotState(mobile)
    }
   
       updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider