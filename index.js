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

  let produto = valor1 * (valor2 + 1) * valor3 * (valor4 + 1) * 100;
  let cluster = "";
  let fat = 0;

  if (produto <= 20000000) {
    cluster = "1";
    fat = (20000000 / (valor2 + 1)) * valor3 * (valor4 + 1) * 100;
  } else if (produto > 20000000 && produto <= 40000000) {
    cluster = "2";
    fat = (40000000 / (valor2 + 1)) * valor3 * (valor4 + 1) * 100;
  } else if (produto > 40000000 && produto <= 75000000) {
    cluster = "3";
    fat = (75000000 / (valor2 + 1)) * valor3 * (valor4 + 1) * 100;
  } else if (produto > 75000000 && produto < 150000000) {
    cluster = "4";
    fat = (150000000 / (valor2 + 1)) * valor3 * (valor4 + 1) * 100;
  } else {
    cluster = "5";
  }

  let formatador = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  let formatado = formatador.format(produto);
  let fat_format = formatador.format(fat);

  document.getElementById(
    "resultado"
  ).innerText = `Resultado: ${formatado} - Cluster: ${cluster} - Você Precisa faturar ${fat_format} para subir de cluster`;
}
