let inputBoxNumber = document.querySelector('#numberBox');
const btnPlus = document.querySelector('#btnplus');
const btnReduce = document.querySelector('#btnreduce');
const h1Result = document.getElementById('h1Result');
const btnreset = document.querySelector('#btnreset');

let contador = 0 ;

function incrementar(){
    contador++;
    h1Result.innerHTML = contador;
}

function decrementar(){
    contador --;
    h1Result.innerHTML = contador;
}

function reset(inicial){
    contador = inicial;
    inputBoxNumber.value = inicial;
    h1Result.innerHTML = contador;
}

btnPlus.addEventListener( 'click' , () => {
    incrementar()
})

btnReduce.addEventListener( 'click', ()=> {
    decrementar()
})

btnreset.addEventListener('click', () => {
    reset(0)
})

inputBoxNumber.addEventListener('change', (e) => {
    contador = parseInt(e.target.value);
})

