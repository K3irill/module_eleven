const input = document.getElementById("itext");
const button = document.getElementById("button");

function checkFun(fun) {
  if (input.value < 1 || input.value > 10) {
    return alert(`«число вне диапазона от 1 до 10».`);
  }
  let url = `https://jsonplaceholder.typicode.com/photos?_limit=${input.value}`;
  fun(url, displayResults);
}

function callRequest(url, callback) {
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = function () {
    if (request.status != 200) {
      console.log(`Status: ${request.status}`);
    } else {
      const result = JSON.parse(request.response);
      if (callback) {
        callback(result);
      }
    }
  };
  request.onerror = function () {
    console.log("Ошибка! Статус ответа: ", request.status);
  };
  request.send();
}

const resultsBlock = document.querySelector(".results");

function displayResults(value) {
  let cards = "";
  value.forEach((el) => {
    const cardBlock = `
      <div class="card">
        <img
          src="${el.thumbnailUrl}"
          class="card-image"
        />
        <p>${el.title}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  resultsBlock.innerHTML = cards;
}

button.addEventListener("click", () => {
  checkFun(callRequest);
});
