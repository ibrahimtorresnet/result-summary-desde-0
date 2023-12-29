//elementos del DOM
let button = document.getElementById("button");
let categoria = document.querySelector(".especial");
let parrafo_categoria = document.querySelector(".categoria-texto");
let result = document.getElementById("result"); // Suponiendo que el elemento tiene id="result"
let circulo = document.querySelector(".circulo");
let inputReaccion = document.querySelector(".reaccion");
let input2 = document.querySelector(".memory");
let input3 = document.querySelector(".verbal");
let input4 = document.querySelector(".visual");
let nro_circulo = document.querySelector(".circulo-numero");



// aceptar solo numeros
[inputReaccion, input2, input3, input4].forEach(input => {
  input.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (parseInt(this.value) > 100) {
      this.value = "";
    }
  });
});

// Evento click para el botón
button.addEventListener("click", function(event) {
  event.preventDefault()
  if (button.innerHTML === 'Resetear') {
    [inputReaccion, input2, input3, input4].forEach(input => {
      input.value = '';
      input.disabled = false; 
    

    });
    document.querySelector(".circulo-numero").innerHTML = '0';
    document.querySelector(".categoria-texto").innerHTML="";
    document.querySelector(".especial").innerHTML="";
    
    result.classList.remove("result-normal", "result-peligro"); 
    result.classList.add("result"); 
 
    circulo.classList.remove("circulo-normal", "circulo-peligro"); 
    
    circulo.classList.add("circulo");

    button.innerHTML = 'Calcular';
    return;
  }

  [inputReaccion, input2, input3, input4].forEach(input => {
    input.disabled = true; // Deshabilitar el campo de entrada
  });
  // Convertir los valores de entrada a números enteros
  let valorReaccion = parseInt(inputReaccion.value);
  let valor2 = parseInt(input2.value);
  let valor3 = parseInt(input3.value);
  let valor4 = parseInt(input4.value);

  // Calcular el promedio
  let parrafo = document.querySelector(".circulo-numero");
  let promedio = parseInt((valorReaccion + valor2 + valor3 + valor4) / 4);
  parrafo.innerHTML = promedio;

  // clasificacion del resultado
  if (promedio >= 75) {
    categoria.innerHTML = "Excelente";
    parrafo_categoria.innerHTML = "Felicidades! Eres una persona con una excelente memoria, reaccion, verbal y visual. Sigue asi!";
    result.classList.add("result");
    circulo.classList.add("circulo");
  } else if (promedio <= 74 && promedio >= 43) {
    categoria.innerHTML = "Normal";
    parrafo_categoria.innerHTML = "Estas en el rango normal de persona actualmente";
    result.classList.add("result-normal");
    circulo.classList.add("circulo-normal");
  } else if(promedio <42){
    categoria.innerHTML = "Grave";
    parrafo_categoria.innerHTML = "Estas en el rango grave y debes revisar tus valores";
    result.classList.add("result-peligro");
    circulo.classList.add("circulo-peligro");
  }

  // Cambiar el texto del botón a 'Resetear'
  button.innerHTML = 'Resetear';
  
});
