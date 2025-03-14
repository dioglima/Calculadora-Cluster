function calcularCluster() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let valor3 = parseFloat(document.getElementById("valor3").value);
  let valor4 = parseFloat(document.getElementById("valor4").value);

  if (isNaN(valor1) || isNaN(valor2) || isNaN(valor4) || isNaN(valor3)) {
    document.getElementById("resultado").innerText =
      "Por favor, insira valores válidos.";
    return;
  }

  let produto = valor1 * valor2 * valor3 * valor4 * 100;
  let cluster = "";

  if (produto <= 20000000) {
    cluster = "1";
  } else if (produto > 20000000 && produto <= 40000000) {
    cluster = "2";
  } else if (produto > 40000000 && produto <= 75000000) {
    cluster = "3";
  } else if (produto > 75000000 && produto < 150000000) {
    cluster = "4";
  } else {
    cluster = "5";
  }

  let formatador = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  let formatado = formatador.format(produto);

  document.getElementById(
    "resultado"
  ).innerText = `Resultado: ${formatado} - Cluster: ${cluster}`;
}
