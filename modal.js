const btnOpenModal1 = document.querySelector("#btnModal1");
const btnOpenModal2 = document.querySelector("#btnModal2");
const btnOpenModal3 = document.querySelector("#btnModal3");
const btnOpenModal4 = document.querySelector("#btnModal4");

const btnCloseModal1 = document.querySelector("#closeModal1");
const btnCloseModal2 = document.querySelector("#closeModal2");
const btnCloseModal3 = document.querySelector("#closeModal3");
const btnCloseModal4 = document.querySelector("#closeModal4");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");

function verModal1(){
    modal1.style.display = "block";
}
function verModal2(){
    modal2.style.display = "block";
}
function verModal3(){
    modal3.style.display = "block";
}
function verModal4(){
    modal4.style.display = "block";
}

function closeModal1(){
    modal1.style.display = "none";
} 
function closeModal2(){
    modal2.style.display = "none";
} 
function closeModal3(){
    modal3.style.display = "none";
} 
function closeModal4(){
    modal4.style.display = "none";
} 

btnOpenModal1.addEventListener( 'click' , () => {
    verModal1()
})

btnCloseModal1.addEventListener('click' , () =>{
    closeModal1()
})
btnOpenModal2.addEventListener( 'click' , () => {
    verModal2()
})

btnCloseModal2.addEventListener('click' , () =>{
    closeModal2()
})
btnOpenModal3.addEventListener( 'click' , () => {
    verModal3()
})

btnCloseModal3.addEventListener('click' , () =>{
    closeModal3()
})
btnOpenModal4.addEventListener( 'click' , () => {
    verModal4()
})

btnCloseModal4.addEventListener('click' , () =>{
    closeModal4()
})