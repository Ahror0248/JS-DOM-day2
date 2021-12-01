document.querySelector(".button").addEventListener("click", func);

function func() {
  let minValue = document.querySelector(".inputMin").value;
  let kmValue = document.querySelector(".inputKm").value;
  let getSpeed = kmValue / minValue;
  document.querySelector(".style").innerHTML = ` Sizning  masofangiz ${kmValue}km, vaqtingiz ${minValue}minut, tezligingiz esa ${getSpeed}m/s  `;
}
