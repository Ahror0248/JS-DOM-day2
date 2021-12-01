document.querySelector(".goBtn").addEventListener("click", go);

function go() {
  firstValue = document.querySelector(".firstInput").value;
  secondValue = document.querySelector(".secondInput").value;
  document.querySelector(
    "#output"
  ).innerHTML = ` Birinchi o'zgaruvchi - ${firstValue} ===== Ikkinchi o'zgaruvchi - ${secondValue} `;
  document.querySelector(".forChange").style.display = "flex";
  document
    .querySelector(".changeBtn")
    .addEventListener("click", changePosition);

  function changePosition() {
    let p = document.createElement('p')
    p.setAttribute('class', 'changeInput')
    p.innerHTML = ` Birinchi o'zgaruvchi - ${secondValue} ===== Ikkinchi o'zgaruvchi - ${firstValue} `
    document.body.appendChild(p)
  }
}
