rotulo1.innerHTML = "Ingrese el primer número";
rotulo2.innerHTML = "Ingrese el segundo número";

let btnEnv = document.getElementById("btnEnviar");
let primerNumero: number = Number(dato1.value);
let segundoNumero: number = Number(dato2.value);
let resultado: number = primerNumero + segundoNumero;

btnEnv.addEventListener("click", () => {
  let primerNumero: number = Number(dato1.value);
  console.log("el primer número es:", primerNumero);
  let segundoNumero: number = Number(dato2.value);
  console.log("el segundo número es:", segundoNumero);
  let resultado: number = primerNumero + segundoNumero;
  console.log("El resultado de la suma es:", resultado);
  //
});
