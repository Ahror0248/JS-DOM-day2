document.querySelector('.btn').addEventListener('click', func)

function func (){
    let firstVlaue = document.querySelector('.shapeInput').value
    let secondValue = document.querySelector('.height').value
    let thirdV = document.querySelector('.anyInput').value
    if(firstVlaue === 'triangle'){
        let string = ''
        for (let i = 1; i <= secondValue; i++) {
            for (let j = 1; j <= secondValue-i; j++){
                string+=' '
            }
            for (let k = 0; k <2 * i-1 ; k++) {
                string+= thirdV
            }
            string+='\n'
        }
        console.log(string);
    }
    for (let b = 1; b <= +secondValue; ++b) {
        let pyramid = thirdV.repeat(b)
        // console.log(pyramid);
    }
}