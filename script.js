
let intento = 6;
let diccionario = "response"; 
const API = 'https://random-word-api.herokuapp.com/word?number=1&length=5&lang=es'

fetch(API).then( response => response.json())
.then(response => {
    palabra = response[0].toUpperCase();
    console.log(response)
})
const button = document.getElementById("guess-button");

button.addEventListener(`click` , intentar);

function leerIntento() {
   let intento = document.getElementById("guess-input");
   intento = intento.value;
    return intento.toUpperCase();
   }

function intentar () {
    const GRID = document.getElementById ("grid");
    const ROW = document.createElement("div");
    ROW.className= `row`;

    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        terminar(`<h1>"GANASTE!!"</h1>`);
        return
    }
    
    for (let i in palabra){
        const SPAN = document.createElement(`span`);
        SPAN.className = `letter`;
        SPAN.innerHTML = INTENTO[i];
        if(INTENTO[i]===palabra[i]){
            //si la letra es correscta se pinta en verde//
            SPAN.style.background=`#79b851`;
        } else if( palabra.includes(INTENTO[i]) ) {
            //si la letra es correscta pero no esta bien ubicado se pinta en amarillo//
            SPAN.style.background=`#f3c237`;
         } else {
            //si la letra no esta en la palabra se pinta en gris//
            SPAN.style.background=`#a4aec4`;
         }
         ROW.appendChild(SPAN);
    } 
    GRID.appendChild(ROW);

    intento--
    if (intento == 0){
        terminar(`<h1>perdiste!!</h1>`);
    }
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disable = true;
    button.disable = true;
    let contenedor = document.getElementById(`guesses`);
    contenedor.innerHTML = mensaje;
}