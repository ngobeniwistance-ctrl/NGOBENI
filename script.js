function deployVM(provider) {
  alert(provider + " VM deployment started!");
}

function startProgress() {
  let width = 0;
  let progress = document.getElementById("progress");
  let interval = setInterval(() => {
    if (width >= 100) clearInterval(interval);
    else {
      width += 10;
      progress.style.width = width + "%";
    }
  }, 500);
}

function calcCost() {
  let hours = document.getElementById("hours").value;
  let rate = document.getElementById("rate").value;
  let result = hours * rate;
  document.getElementById("result").innerText = "Estimated Cost: $" + result;
}
