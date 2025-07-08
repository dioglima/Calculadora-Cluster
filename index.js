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

  if (produto <= 12000000) {
    cluster = "1";
    fat = 12000000 / (100 * (valor2 + 1) * valor3 * (valor4 + 1));
  } else if (produto > 12000000 && produto <= 24000000) {
    cluster = "2";
    fat = 24000000 / (100 * (valor2 + 1) * valor3 * (valor4 + 1));
  } else if (produto > 24000000 && produto <= 61000000) {
    cluster = "3";
    fat = 61000000 / (100 * (valor2 + 1) * valor3 * (valor4 + 1));
  } else if (produto > 61000000 && produto < 130000000) {
    cluster = "4";
    fat = 130000000 / (100 * (valor2 + 1) * valor3 * (valor4 + 1));
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
