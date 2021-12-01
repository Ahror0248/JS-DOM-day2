document.querySelector(".btn").addEventListener("click", Func);

function Func() {
  var inputValue = document.querySelector(".input").value;
  var allSum = inputValue * 10600;
  let p = document.createElement("p");
  p.setAttribute('class', 'dec')
  p.innerHTML = `Siz kiritgan ${inputValue}$ ozbek somida ${allSum} ni tashkil qiladi!`;
// p.innerHTML = allSum
  console.log(p.innerHTML);
  document.body.appendChild(p)
}
