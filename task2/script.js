document.querySelector(".btn").addEventListener("click", func);

function func() {
  let shapeValue = document.querySelector("#shape").value;
  let colorValue = document.querySelector("#color").value;
  let widthValue = document.querySelector("#width").value;
  let heightValue = document.querySelector("#height").value;
  let inputRadius = document.querySelector(".inputRadius").value;
  let topleft = document.querySelector(".TopLeftInput").value;
  let topright = document.querySelector(".TopRightInput").value;
  let bottomright = document.querySelector(".BottomRightInput").value;
  let bottomleft = document.querySelector(".BottomLeftInput").value;
  let styled = document.querySelector(".div").style;

  
  if (shapeValue === "round") {
    styled.borderRadius = "50%";
    document.querySelector(".radius").style.display = "none";
  }
  if (shapeValue === "square") {
    styled.borderRadius = "0%";
    document.querySelector(".radius").style.display = "none";
  }
  if (shapeValue === "other") {
    document.querySelector(".radius").style.display = "flex";
    styled.borderRadius = inputRadius;
  }
  if (inputRadius === "other") {
    document.querySelector(".partRadius").style.display = "flex";
  }
  if (inputRadius === "other") {
    styled.borderTopLeftRadius = topleft;
  }
  if (inputRadius === "other") {
    styled.borderTopRightRadius = topright;
  }
  if (inputRadius === "other") {
    styled.borderBottomRightRadius = bottomright;
  }
  if (inputRadius === "other") {
    styled.borderBottomLeftRadius = bottomleft;
  }
  styled.backgroundColor = colorValue;
  styled.width = widthValue;
  styled.height = heightValue;
}
