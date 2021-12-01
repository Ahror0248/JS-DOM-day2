document.querySelector('.btn').addEventListener('click', func)

function func(){
    let inputValue = document.querySelector('.input').value
    let date = new Date().getFullYear()
    let getAge = date - inputValue
    let p = document.createElement('p')
    p.setAttribute('class', 'style')
    p.innerHTML = `Siz ${getAge} yoshdasiz!`
    document.body.appendChild(p)
}