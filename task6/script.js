document.querySelector('.btn').addEventListener('click', func)

function func() {
    let firstValue = document.querySelector('.firstNum').value
    let secondValue = document.querySelector('.secondNum').value
    let getArifmetik = (+firstValue + +secondValue)/2
    let p = document.createElement('p')
    p.setAttribute('class', 'style')
    p.innerHTML = ` ${firstValue} va ${secondValue} ning o'rta arifmetigi = ${getArifmetik} `
    document.body.appendChild(p)
}