
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    if (lowerCaseMessage.includes("mobile")) {
      this.actionProvider.handlermobile()
    }
    if (lowerCaseMessage.includes("saree")) {
      this.actionProvider.handlersaree()
    }
    if (lowerCaseMessage.includes("dress")) {
      this.actionProvider.handlerdress()
  }   
    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greetig()
    }
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("who")) {
      this.actionProvider.greet2()
    }
    if (lowerCaseMessage.includes("html")) {
      this.actionProvider.handleHTML();
    }
    if (lowerCaseMessage.includes("css")) {
      this.actionProvider.handleCSS();
    }
    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
    if (lowerCaseMessage.includes("react")) {
      this.actionProvider.handleReact();
    }
    if (lowerCaseMessage.includes("python")) {
      this.actionProvider.handlePython();
    }
    if (lowerCaseMessage.includes("images")) {
      this.actionProvider.handleImage();
    }
    if (lowerCaseMessage.includes("video")) {
      this.actionProvider.handlerVideo();
    }
      }
}

export default MessageParser