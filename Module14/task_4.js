const button = document.querySelector("button");
const resultBlock = document.querySelector(".results");
const values = document.querySelectorAll("#itext");

button.addEventListener("click", request);

function request() {
  let width = Number(values[0].value);
  let height = Number(values[1].value);
  if ((width < 100 || width > 300) || (height < 100 || height > 300)) {
    return console.log("erroooooor");
  } else {
    let url = `https://dummyimage.com/${values[0].value}x${values[1].value}/`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("not ok");
        }
        resultBlock.innerHTML = `
              <img src="${url}"/>
        `;
        console.log("yeees");
      })
      .catch((err) => {
        resultBlock.innerHTML = `Erroooooor: ${err.message}`;
        console.log(err);
      });
  }
}
