const vlr = document.querySelector("#vlr");
const select = document.querySelector("select");

const btn = document.querySelector("#btn");

const outputVlrG = document.querySelector("#vlrG");
const outputVlrT = document.querySelector("#vlrT");

btn.addEventListener("click", calc);

vlr.addEventListener("input", () => {
  vlr.value = vlr.value.replace(/\D+/g, "");
});

function calc() {
  let selecValue = select.value;
  const vlrValue = Number(vlr.value);
  let vlrGorjeta;

  if (selecValue === "excelente") {
    vlrGorjeta = (10 * vlrValue) / 100;
  } else if (selecValue === "otimo") {
    vlrGorjeta = (8 * vlrValue) / 100;
  } else if (selecValue === "bom") {
    vlrGorjeta = (5 * vlrValue) / 100;
  } else {
    vlrGorjeta = (2 * vlrValue) / 100;
  }

  outputVlrG.value = `R$ ${vlrGorjeta} `;
  let soma = vlrValue + vlrGorjeta;
  outputVlrT.value = `R$ ${soma}`;
}
