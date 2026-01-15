const btn = document.querySelector("#btn");

const outputVlrG = document.querySelector("#vlrG");
const outputVlrT = document.querySelector("#vlrT");

function calc() {
  const vlr = Number(document.querySelector("#vlr").value);
  const select = Number(document.querySelector("select").value);

  const soma = (select * vlr) / 100;

  console.log(soma)
  outputVlrG.value = soma
  outputVlrT.value = soma + vlr
}

btn.addEventListener("click", calc);

vlr.addEventListener("input", () => {
  vlr.value = vlr.value.replace(/\D+/g, "");
});
