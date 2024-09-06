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
    this.btnGeolocation = document.getElementById("btn-geol");
    this.messageInput = document.getElementById("message-input");
  }
  writeToScreen(message, isServer = false, isGeolocation = false, link = "") {
    const element = isGeolocation
      ? (this.parg = document.createElement("a"))
      : (this.parg = document.createElement("p"));

    if (isGeolocation && link) {
      element.href = link;
      element.target = "_blank";
      element.innerText = "My location";
    } else {
      element.innerHTML = message;
    }
    this.parg.classList.add(
      "chat__main-field_mesg",
      isServer ? "chat__main-field_server-mesg" : "chat__main-field_user-mesg"
    );
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
  getGeolocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const mapLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
          this.writeToScreen(null, false, true, mapLink);
        },
        () => {
          this.writeToScreen("Unable to retrieve location", false, false);
        }
      );
    } else {
      this.writeToScreen(
        "Geolocation is not supported by your browser",
        false,
        false
      );
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
    this.btnGeolocation.addEventListener("click", () => {
      this.getGeolocation();
    });
  }
  initWebSocketEvents() {
    this.websocket.onmessage = (event) => {
      this.writeToScreen(event.data, true);
    };
  }
}

const start = new EchoChat();
