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
  sendMessage() {
    const message = this.messageInput.value;
    if (message.trim()) {
      this.writeToScreen(message);
      this.websocket.send(message);
      this.messageInput.value = "";
    }
  }
  initEvents() {
    this.btnSend.addEventListener("click", () => {
      this.sendMessage();
    });
    this.messageInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.sendMessage();
      }
    });
  }
  initWebSocketEvents() {
    this.websocket.onmessage = (event) => {
      this.writeToScreen(event.data, true);
    };
  }
}

const start = new EchoChat();
