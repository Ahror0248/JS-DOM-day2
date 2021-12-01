document.querySelector('.btn').addEventListener('click', func)

function func(){
    let inputValue = document.querySelector('.input').value;
    let getCentury = Math.ceil(inputValue /100)
    document.querySelector('.style').innerHTML = ` Siz kiritgan ${inputValue} yil => ${getCentury} ga tegishli! `
}