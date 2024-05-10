/* ingrasr tres numero en cada uno de los input y nodejar enviar mas
y mostrar los 6 personajes*/

let numeros1 = [];
let numeros2 = [];
function agregarprimero() {
    const input1 = document.getElementById('num1');
    const numero1 = parseInt(input1.value);
    
    if ((numero1 > 0) & (numero1 < 826)) {
        if (numeros1.length < 3) {
            numeros1.push(numero1);
            input1.value = '';
            }else {
            alert('Ya ha ingresado 3 números')
            }; 
        } else {
            alert('ingrese un numero entre 1 y 826')
        };
        if (numeros1.length === 3) {
            document.getElementById("boton1").disabled = true;
        }
}

function agregarsegundo() {
    const input2 = document.getElementById('num2');
    const numero2 = parseInt(input2.value);

    if ((numero2 > 0) & (numero2 < 826)) {
        if (numeros2.length < 3) {
            numeros2.push(numero2);
            input2.value = '';
            } else {
            alert('Ya ha ingresado 3 números')
            }; 
        } else {
            alert('ingrese un numero entre 1 y 826')
        };
    if (numeros2.length === 3) {
        document.getElementById("boton2").disabled = true;
    }  
}

function enviar(){
    if (numeros1.length === 3 & numeros2.length === 3) { 
        document.getElementById("enviarboton").disabled = true;
        fetch(`https://rickandmortyapi.com/api/character/${numeros1[0]},${numeros1[1]},${numeros1[2]},${numeros2[0]},${numeros2[1]},${numeros2[2]}`)
            .then(res => res.json())
            .then((data)=> {
                let i=0;
                let j=0;
                for (i=0;i<6;i++) {
                    for (j=0;j<3;j++) {
                            
                            if (data[i].id === numeros1[j]) {

                                var contenedor = document.getElementById("info1");
                                /*crea un nuevo elemento de imag*/
                                var imagen = document.createElement("img");
                                /*ingrasa atributo en el elemento img*/ 
                                imagen.setAttribute("src", data[i].image);
                                /* Agregar la imagen al div, pero sin sobreescribir*/
                                contenedor.appendChild(imagen);
                            }
                            if (data[i].id === numeros2[j]) {

                                var contenedor = document.getElementById("info2");
                                var imagen = document.createElement("img");
                                imagen.setAttribute("src", data[i].image);
                                contenedor.appendChild(imagen);
                            }
                    }
                }
            }
        )
        .catch(error => {
            console.error('Error al procesar la solicitud:', error);
            alert('no hay internet')
        });
    }
     else {
        alert('termina de ingresar 3 numeros en cada campo')
    }
}