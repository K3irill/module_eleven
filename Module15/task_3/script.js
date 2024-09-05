class EchoChat {
  constructor() {
    this.wsUri = "wss://echo.websocket.org/";
    this.websocket = new WebSocket(this.wsUri);
    this.initElements();
    this.initEvents();
    this.initWebSocketEvents();
  }

  initElements() {
    this.output = document.getElementById("output");
    this.btnSend = document.getElementById("btn-send");
    this.messageInput = document.getElementById("message-input");
  }
  writeToScreen(message, isServer = false) {
    this.parg = document.createElement("p");
    this.parg.classList.add(
      "chat__main-field_mesg",
      isServer ? "chat__main-field_server-mesg" : "chat__main-field_user-mesg"
    );
    this.parg.innerHTML = message;
    this.output.appendChild(this.parg);
  }
  initEvents() {
    this.btnSend.addEventListener("click", () => {
      const message = this.messageInput.value;
      this.writeToScreen(message);
      this.websocket.send(message);
      this.messageInput.value = "";
    });
  }
  initWebSocketEvents(){
    this.websocket.onmessage = event => {
        this.writeToScreen(event.data, true)
    }
  }
}

const start = new EchoChat();
