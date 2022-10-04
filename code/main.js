let companyB = document.getElementsByClassName('header__nav__contenido__izquierda__features');
let contenedorFlotan =document.getElementById('contenedorFlotante');
let containerF = document.getElementById('contentFlotante');

let mostrar = () =>{
    contenedorFlotan.classList.remove('hidden');
    containerF.innerHTML = '';
        containerF.innerHTML += `     
        <article class="cardFL">
            <div class="imageFLO">
                <img src="./images/icon-todo.svg"class="imageFLO1"><p class="letra">Todo list</p>
            </div>
            <div class="imageFLO">
                <img src="./images/icon-calendar.svg"class="imageFLO1"><p class="letra">Calendar</p>
            </div>
            <div class="imageFLO">
                <img src="./images/icon-reminders.svg"class="imageFLO1"><p class="letra">Reminders</p>
            </div>
            <div class="imageFLO">
                <img src="./images/icon-planning.svg"class="imageFLO1"><p class="letra">Planing</p>
            </div>
        </article>
        `
}

let mostrar1 = () =>{
    contenedorFlotan.classList.add('hidden');
}



companyB[0].addEventListener('mouseover',mostrar);
companyB[0].addEventListener('mouseout',mostrar1);


let companyC = document.getElementsByClassName('header__nav__contenido__izquierda__company');
let contenedorFlotan1 =document.getElementById('contenedorFlotante1');
let containerF1 = document.getElementById('contentFlotante1');

let mostra = () =>{
    contenedorFlotan1.classList.remove('hidden1');
    containerF1.innerHTML = '';
        containerF1.innerHTML += `     
        <article class="cardFL1">
            <div class="imageFLO2">
                <p class="letra1">History</p>
            </div>
            <div class="imageFLO2">
                <p class="letra1">Our team</p>
            </div>
            <div class="imageFLO2">
                <p class="letra1">Blog</p>
            </div>
        </article>
        `
        
}



let mostra1 = () =>{
    contenedorFlotan1.classList.add('hidden1');
}

companyC[0].addEventListener('mouseover',mostra);
companyC[0].addEventListener('mouseout',mostra1);

// //--------------------------------------//

class x{
    constructor(id){
    this.target =document.getElementById(id)
}
}
const {target:menuH} =new x('menuhamburguesa')
const {target:menuI} =new x('menuinterno')

const ocularYmostrar =()=>{

    if(menuI.classList.contains('hidden3')){
        menuI.classList.remove('hidden3')
    }
    else{
        menuI.classList.add('hidden3')
    }
}
menuH.addEventListener('click',ocularYmostrar)