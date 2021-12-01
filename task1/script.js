document.querySelector(".btn").addEventListener("click", func);

function func() {
let shapeValue = document.querySelector("#shape").value;
let colorValue = document.querySelector("#color").value;
let widthValue = document.querySelector("#width").value;
let heightValue = document.querySelector("#height").value;


 let styled = document.querySelector('.div').style
  if (shapeValue === "round") {
    styled.borderRadius = "50%";
  }
  if(shapeValue === 'square'){
    styled.borderRadius = '0%'
  }
  styled.backgroundColor = colorValue;
  styled.width = widthValue;
  styled.height = heightValue;
};
