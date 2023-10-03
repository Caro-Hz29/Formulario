let boton = document.getElementById('ejecutar');
let opcion = document.querySelector('select');
let resultado = document.getElementById('resultado');

boton.addEventListener('click', operacion);

function operacion(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let opcion2 = opcion.value;

    if (opcion2 === "Suma") {
        let res = num1 + num2;
        resultado.innerHTML=`${res}`;
    } else if(opcion2 === "Resta"){
        let res = num1 - num2;
        resultado.innerHTML=`${res}`;
    } else if(opcion2 === "Multiplicacion"){
        let res = num1 * num2;
        resultado.innerHTML=`${res}`;
    }else if(opcion2 === "Division"){
        let res = num1 / num2;
        resultado.innerHTML=`${res}`;
    }    
}