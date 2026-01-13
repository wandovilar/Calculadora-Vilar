const visor = document.querySelector(".visor");
const numeros = document.querySelectorAll(".numero");
const especial = document.querySelector(".numero-especial");
const operadores = document.querySelectorAll(".operadores");

let numero = "";
let operador = "";
let resetarVisor = false;

numeros.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (resetarVisor) {
      visor.value = botao.innerText;
      resetarVisor = false;
    } else {
      visor.value += botao.innerText;
    }
  });
});
operadores.forEach((botao) => {
  botao.addEventListener("click", () => {
    const botaoClicado = botao.innerText;

    //  C (Limpar tudo)
    if (botaoClicado === "C") {
      visor.value = "0";
      numero = "";
      operador = "";
      resetarVisor = false;
      return;
    }

    //  +/-
    if (botaoClicado === "+/-") {
      visor.value = Number(visor.value) * -1;
      return;
    }

    //  %
    if (botaoClicado === "%") {
      visor.value = Number(visor.value) / 100;
      return;
    }

    //  =
    if (botaoClicado === "=") {
      let resultado;

      if (operador === "+") {
        resultado = Number(numero) + Number(visor.value);
      } else if (operador === "-") {
        resultado = Number(numero) - Number(visor.value);
      } else if (operador === "*") {
        resultado = Number(numero) * Number(visor.value);
      } else if (operador === "/") {
        resultado = Number(numero) / Number(visor.value);
      } else {
        return;
      }

      visor.value = resultado;
      numero = resultado;
      resetarVisor = true;
      return;
    }

    // Guardar operador e primeiro número
    operador = botaoClicado;
    numero = visor.value;
    resetarVisor = true;
  });
});

