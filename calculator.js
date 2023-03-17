let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
window.addEventListener("load", () => {
  const container = document.getElementById("numbers");
  displayNumbers();
  function displayNumbers() {
    let count = 0;
    for (let nos of numbers) {
      count++;
      const button = document.createElement("button");
      button.value = nos;
      button.classList.add("cal-button");
      const node = document.createTextNode(nos);
      button.appendChild(node);
      const element = document.getElementById("numbers");
      element.appendChild(button);
      if (count % 3 == 0) {
        element.appendChild(document.createElement("br"));
      }
    }
  }
  container.addEventListener("click", function (e) {
    if (e.target.classList.contains("cal-button")) {
      document.getElementById("enter").value += e.target.value;
    }
  });
  const clear = document.createElement("button");
  clear.appendChild(document.createTextNode("clear"));
  clear.classList.add("clr-button");
  clear.id = "clear-input";
  container.appendChild(clear);

  const clearBtn = document.getElementById("clear-input");
  clearBtn.addEventListener("click", function (e) {
    document.getElementById("enter").value = "";
  });
});
