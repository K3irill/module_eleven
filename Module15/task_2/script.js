class main {
  constructor() {
    this.initElements();
    this.initEvents();
  }
  initElements() {
    this.button = document.getElementById("button");
    this.resultBlock = document.getElementById("result");
  }
  get screenSize() {
    // const { clientWidth: width, clientHeight: height } = document.body;
    const { clientWidth: width, clientHeight: height } =
      document.documentElement;
    return { width, height };
  }
  initEvents() {
    this.button.addEventListener("click", () => this.showScreenSize());
  }
  showScreenSize() {
    const { width, height } = this.screenSize;
    this.resultBlock.innerHTML = `Screen width: ${width}, Screen height: ${height}`;
  }
}

const start = new main();
