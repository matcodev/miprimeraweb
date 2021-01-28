const button = document.querySelector('#eject');
const buttonRemove = document.querySelector('#clearAll');
const output = document.querySelector('#resultFinal');
let n1 = document.querySelector('#firstBox');
let n2 = document.querySelector('#secondBox');
let op = document.querySelector('#op');
let result;

const parseInteger = (text) => {
    return parseInt(text.value);
}

const calculate = (v1, v2, op) => {
    let p1 = parseInteger(v1)
    let p2 = parseInteger(v2)
    return {
        '+': p1 + p2,
        '-': p1 - p2,
        '*': p1 * p2,
        '/': p1 / p2,
    }[op]
}

button.addEventListener( 'click', () => {
    result = calculate(n1, n2, op.value);

    output.innerHTML = result;
})

buttonRemove.addEventListener('click', () => {
     let clear = document.querySelector('#clearAll');
     n1.value ="";
     n2.value ="";
     result = 0;
     output.innerHTML = 0;
 } )


